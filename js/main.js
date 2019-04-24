let titlestr;
let logo;
let timer = 0;
let yu;

export default class Main{
    static Init(){
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
        yu = logo.children[0];
        logo.children[0].style.top = "10px";
        Main.Run();
    }
    static Run(){
        requestAnimationFrame(Main.Run);
        for (let i = 0; i < 5; i++) {
            logo.children[i].style.top = Math.sin((timer+i*40) * 0.03) * 8 + "px";
            logo.children[i].style.left = Math.cos((timer+i*40) * 0.03) * 8 + "px";
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