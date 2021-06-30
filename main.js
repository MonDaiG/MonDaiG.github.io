'use strict'
{
    let winh,winw,scale_rate;
    let lanim_count=50,ldelta=0;
    let ranim_count=140,rdelta=0;
    const body=document.querySelector("body");
    const main=document.getElementById('main');
    const header=document.querySelector("header");
    // P1-bfのサイズ設定
    const P1bf=document.getElementById('P1-bf');
    P1bf.src="./img/python1-bf.png";
    const P1f=document.getElementById("P1-f");
    P1f.src="./img/Pythonbook1.png";
    const lcandl=document.getElementById("lcandl");
    lcandl.src="./img/candl.png";
    const rcandl=document.getElementById("rcandl");
    rcandl.src="./img/candl.png";
    const llight=document.getElementById("llight");
    llight.src="./img/light.png";
    const rlight=document.getElementById("rlight");
    rlight.src="./img/light.png";
    const plate=document.getElementById("plate");
    plate.src="./img/plate.png"
    const guide=document.getElementById("guide");

    const baloon=document.getElementById("baloon")

    const bmask=document.getElementById("bmask");
    const askread=document.getElementById("ask-read");
    const readY=document.getElementById("readY");
    const readN=document.getElementById("readN");
    
    window.onload=()=>{
        setPosition();
        candl_anim();
    }
    
    //
    function setPosition(){
        winh=window.innerHeight;
        winw=window.innerWidth;

        if(winh>1000){
            main.style.height=1000+"px"
            scale_rate=1.0;
            header.style.height=winh-1000+"px"

        }else{
            main.style.height=winh+"px"
            scale_rate=winh/1000;
        }
        main.style.width=scale_rate*2000+'px';
        
        // P1bfの位置設定
        P1bf.style.left=435*scale_rate+'px';
        P1bf.style.bottom=644*scale_rate+'px';
        P1bf.style.width=55*scale_rate+'px';
        
        // P1fの位置設定
        P1f.style.left=(winw-400*scale_rate)/2+'px';
        P1f.style.top=100*scale_rate+'px';
        P1f.style.width=400*scale_rate+'px';
        P1f.style.zIndex=11;

        //candlの位置設定
        lcandl.style.width=120*scale_rate+"px"
        lcandl.style.left=862*scale_rate+"px"
        lcandl.style.bottom=430*scale_rate+"px"
        rcandl.style.width=120*scale_rate+"px"
        rcandl.style.left=1453*scale_rate+"px"
        rcandl.style.bottom=430*scale_rate+"px"

        //lightの位置設定
        llight.style.width=400*scale_rate+"px"
        llight.style.left=722*scale_rate+"px"
        llight.style.bottom=340*scale_rate+"px"
        rlight.style.width=400*scale_rate+"px"
        rlight.style.left=1313*scale_rate+"px"
        rlight.style.bottom=340*scale_rate+"px"

        //plate,guideの位置設定
        plate.style.left=50*scale_rate+"px"
        plate.style.top=0+"px"
        plate.style.width=300*scale_rate+"px"
        guide.style.left=110*scale_rate+"px"
        guide.style.top=60*scale_rate+"px"
        guide.style.width=300*scale_rate+"px"
        guide.style.fontSize=30*scale_rate+"px"

        //baloonの位置設定
        baloon.style.left=20+"px"
        baloon.style.top=80+"px"
        baloon.style.width=330*scale_rate+"px"
        baloon.style.height=240*scale_rate+"px"
        baloon.style.fontSize=2*scale_rate+"rem"
        
        // askreadの位置設定
        askread.style.left=(winw-320)/2+'px';
        askread.style.top=winh-170+'px';
        // readYの位置設定
        readY.style.left=winw/2-150+'px';
        readY.style.top=winh-100+'px';
        // readNの位置設定
        readN.style.left=winw/2+50+'px';
        readN.style.top=winh-100+'px';
        console.log("winw:winh =",winw,winh)
    }


    // windowサイズ変更時の処理
    window.addEventListener('resize',()=>{
        setPosition();
    })

    // 横スクロールプログラム
    window.onmousewheel = (event)=>{
        // console.log(event.deltaY)
        if(event.deltaY>0){
            window.scrollBy(100,0)
        }else if(event.deltaY<0){
            window.scrollBy(-100,0)
        }
        console.log("done!")
    }

    //candlの点滅アニメーション
    function candl_anim(){
        requestAnimationFrame(candl_anim);
        
        if(lanim_count==50){
            lanim_count=lanim_count+Math.floor(Math.random()*40);
            ldelta=0.5;
        }else if(lanim_count==140){
            lanim_count=lanim_count-Math.floor(Math.random()*40);
            ldelta=-0.5;
        }
        llight.style.opacity=lanim_count*0.005+""
        lanim_count+=ldelta;

       
        if(ranim_count==50){
            ranim_count=ranim_count+Math.floor(Math.random()*40);
            rdelta=0.5;
        }else if(ranim_count==140){
            ranim_count=ranim_count-Math.floor(Math.random()*40);
            rdelta=-0.5;
        }
        rlight.style.opacity=ranim_count*0.005+""
        ranim_count+=rdelta;
    }
    
    
    
    //P1Bfのクリック時の処理
    P1bf.onclick=()=>{
        showDialog("");
    }

    //P1bfのhover処理
    P1bf.onmouseenter=()=>{
        P1bf.style.transform="scale(1.5)";
        // P1f.style.transform="rotateY(-90deg) scale(1.5)";
        P1bf.style.filter="brightness(1.3)";
    }
    P1bf.onmouseleave=()=>{
        P1bf.style.transform="scale(1.0)";
        // P1f.style.transform="rotateY(-90deg) scale(1.0)";
        P1bf.style.filter="brightness(1.0)";
    }
    

    function showDialog(url){
        P1f.classList.remove("hidden");
        bmask.classList.remove("hidden");
        askread.classList.remove("hidden");
        readY.classList.remove("hidden");
        readN.classList.remove("hidden");
    }
    
    function closeDaialog(){
        P1f.classList.add("hidden");
        bmask.classList.add("hidden");
        askread.classList.add("hidden");
        readY.classList.add("hidden");
        readN.classList.add("hidden");
    }

    readY.onclick=()=>{
        closeDaialog();
        location.href="http://blog.livedoor.jp/mon_dai_g/"
    }
    readN.onclick=()=>{
        closeDaialog();
    }
}
