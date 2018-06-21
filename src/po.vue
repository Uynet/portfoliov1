
    <section id="page" class="container">
      
      <router-view></router-view>

      <div v-bind:class="layer" v-on:click="slide"></div>
      <div v-bind:class="layer2"></div>

      <div class="mainspace">
        <div class = "logo" align="center">
          ゆいブログ
          <div class = "logo_subtext"></div>
        </div>
        <div class="chara" align="center">
          <div class="greeting" align="center">
            <marquee scrolldelay="500">よおこそ♨</marquee>
          </div>
          <br>
          <img src="chara.png">
          <div class=logo_subtext>イメージキャラクター"ゆいちゃん"</div>
        </div>

        <div class="menu_open">
          <div class="side">
            <div class="sidelineR">
              <div class="cornerRT">
                <i v-bind:class="state" v-on:click="slide"></i>
              </div>
            </div>
            <div class="sidelineL">
              <div class="cornerLT">
                <div class = "links">
                  <a href = "http://twitter.com/highsate"><i class="fab fa-twitter-square fa-black"></i></a>
                  <a href = "http://github.com/uynet"><i class="fab fa-github fa-black"></i></a>
                  <a href = "https://soundcloud.com/saihate-1"><i class="fab fa-soundcloud fa-black"></i></a>
                  <a href = "http://uynet.work"><i class="fab fa-blogger fa-black"></i></a>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="po">
          ※ポートフォリオページ作成中です。作ったものは左下のリンクみてください。
        </div>
      </div>
        <footer class="footer">
          <div class = "copy">
            © 2018 uynet
          </div>
        </footer>
    </section>
