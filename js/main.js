let titlestr;
let logo;
let timer = 0;

export default class Main{
    static Init(){
        return;
        logo = document.getElementById("TitleLogo");
        logo.innerText = "";
        titlestr = [];
        for(let i=0;i<5;i++){
            titlestr[i] = document.createElement("span");
            titlestr[i].innerText = "ゆいブログ"[i];
            titlestr[i].style.position= "relative";
            titlestr[i].id = "ゆいブログ"[i];
            logo.appendChild(titlestr[i]);
        }
        Main.Run();
    }
    static Run(){
        requestAnimationFrame(Main.Run);
        for (let i = 0; i < 5; i++) {
            logo.children[i].style.top = Math.sin((timer+i*40) * 0.03) * 4 + "px";
            logo.children[i].style.left = Math.cos((timer+i*40) * 0.03) * 4 + "px";
        }
        /*
             e.style.top = Math.sin(timer*0.1)*10+"px";
        });
        */
        timer++;
    }
}
/* ----------------------- */
(function(){Main.Init()})();
/* ----------------------- */