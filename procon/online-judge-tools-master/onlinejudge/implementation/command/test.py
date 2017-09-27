# Python Version: 3.x
import onlinejudge
import onlinejudge.implementation.utils as utils
import onlinejudge.implementation.logging as log
import sys
import os
import os.path
import re
import glob
import colorama
import collections
import time
import math

def glob_with_format(format):
    table = {}
    table['s'] = '*'
    table['e'] = '*'
    pattern = utils.parcentformat(format, table)
    paths = glob.glob(pattern)
    for path in paths:
        log.debug('testcase globbed: %s', path)
    return paths

def match_with_format(format, path):
    table = {}
    table['s'] = '(?P<name>.+)'
    table['e'] = '(?P<ext>in|out)'
    pattern = re.compile('^' + utils.parcentformat(format, table) + '$')
    return pattern.match(os.path.normpath(path))

def path_from_format(format, name, ext):
    table = {}
    table['s'] = name
    table['e'] = ext
    return utils.parcentformat(format, table)

def construct_relationship_of_files(paths, format):
    tests = collections.defaultdict(dict)
    for path in paths:
        m = match_with_format(format, os.path.normpath(path))
        if not m:
            log.error('unrecognizable file found: %s', path)
            sys.exit(1)
        name = m.groupdict()['name']
        ext  = m.groupdict()['ext']
        assert ext not in tests[name]
        tests[name][ext] = path
    for name in tests:
        if 'in' not in tests[name]:
            assert 'out' in tests[name]
            log.error('dangling output case: %s', tests[name]['out'])
            sys.exit(1)
    if not tests:
        log.error('no cases found')
        sys.exit(1)
    log.info('%d cases found', len(tests))
    return tests

def compare_as_floats(xs, ys, error):
    def f(x):
        try:
            y = float(x)
            if not math.isfinite(y):
                log.warning('not an real number found: %f', y)
            return y
        except ValueError:
            return x
    xs = list(map(f, xs.split()))
    ys = list(map(f, ys.split()))
    if len(xs) != len(ys):
        return False
    for x, y in zip(xs, ys):
        if isinstance(x, float) and isinstance(y, float):
            if not math.isclose(x, y, rel_tol=error, abs_tol=error):
                return False
        else:
            if x != y:
                return False
    return True

def test(args):
    if not args.test:
        args.test = glob_with_format(args.format) # by default
    tests = construct_relationship_of_files(args.test, args.format)
    # run tests
    if args.error: # float mode
        match = lambda a, b: compare_as_floats(a, b, args.error)
    else:
        match = lambda a, b: a == b
    rstrip_targets = ' \t\r\n\f\v\0'  # ruby's one, follow AnarchyGolf
    slowest, slowest_name = -1, ''
    ac_count = 0
    for name, it in sorted(tests.items()):
        log.emit('')
        log.info('%s', name)
        with open(it['in']) as inf:
            # run
            begin = time.perf_counter()
            answer, proc = utils.exec_command(args.command, shell=args.shell, stdin=inf, timeout=args.tle)
            end = time.perf_counter()
            answer = answer.decode()
            if args.rstrip:
                answer = answer.rstrip(rstrip_targets)
            if slowest < end - begin:
                slowest = end - begin
                slowest_name = name
            log.status('time: %f sec', end - begin)
            # check
            is_ac = True
            if proc.returncode is None:
                log.failure(log.red('TLE'))
                is_ac = False
            elif proc.returncode != 0:
                log.failure(log.red('RE') + ': return code %d', proc.returncode)
                is_ac = False
            if 'out' in it:
                with open(it['out']) as outf:
                    correct = outf.read()
                if args.rstrip:
                    correct = correct.rstrip(rstrip_targets)
                # compare
                if args.mode == 'all':
                    if not match(answer, correct):
                        log.failure(log.red('WA'))
                        if not args.silent:
                            log.emit('output:\n%s', log.bold(answer))
                            log.emit('expected:\n%s', log.bold(correct))
                        is_ac = False
                elif args.mode == 'line':
                    answer  = answer .splitlines()
                    correct = correct.splitlines()
                    for i, (x, y) in enumerate(zip(answer + [ None ] * len(correct), correct + [ None ] * len(answer))):
                        if x is None and y is None:
                            break
                        elif x is None:
                            log.failure(log.red('WA') + ': line %d: line is nothing: expected "%s"', i, log.bold(y))
                            is_ac = False
                        elif y is None:
                            log.failure(log.red('WA') + ': line %d: unexpected line: output "%s"', i, log.bold(x))
                            is_ac = False
                        elif not match(x, y):
                            log.failure(log.red('WA') + ': line %d: output "%s": expected "%s"', i, log.bold(x), log.bold(y))
                            is_ac = False
                else:
                    assert False
            else:
                if not args.silent:
                    log.emit(log.bold(answer))
            if is_ac:
                log.success(log.green('AC'))
                ac_count += 1
    # summarize
    log.emit('')
    log.status('slowest: %f sec  (for %s)', slowest, slowest_name)
    if ac_count == len(tests):
        log.success('test ' + log.green('success') + ': %d cases', len(tests))
    else:
        log.failure('test ' + log.red('failed') + ': %d AC / %d cases', ac_count, len(tests))
        sys.exit(1)

def generate_output(args):
    if not args.test:
        args.test = glob_with_format(args.format) # by default
    tests = construct_relationship_of_files(args.test, args.format)
    for name, it in sorted(tests.items()):
        log.emit('')
        log.info('%s', name)
        if 'out' in it:
            log.info('output file already exists.')
            log.info('skipped.')
            continue
        with open(it['in']) as inf:
            begin = time.perf_counter()
            answer, _ = utils.exec_command(args.command, shell=args.shell, stdin=inf)
            end = time.perf_counter()
            log.status('time: %f sec', end - begin)
        log.emit(log.bold(answer.decode().rstrip()))
        path = path_from_format(args.format, match_with_format(args.format, it['in']).groupdict()['name'], 'out')
        with open(path, 'w') as fh:
            fh.buffer.write(answer)
        log.success('saved to: %s', path)
