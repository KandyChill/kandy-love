const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const message = document.getElementById("message");
const typingMessage = document.getElementById("typingMessage");

let soLanTuChoi = 0;

const texts = [
"Không cần cả thế giới.",
"",
"Chỉ cần có cậu.",
"",
"Mỗi khoảnh khắc bên cậu",
"đều là những kỷ niệm đáng trân trọng.",
"",
"Cảm ơn cậu",
"đã xuất hiện trong cuộc sống của tớ.",
"",
"Nếu một ngày cậu mệt mỏi,",
"hy vọng cậu sẽ nhớ rằng...",
"",
"Luôn có một người",
"âm thầm mong cậu hạnh phúc.",
"",
"Dù hôm nay,",
"ngày mai,",
"hay thật lâu về sau...",
"",
"Tớ vẫn mong cậu",
"luôn bình an và mỉm cười.",
"",
"I Love You. ❤️",
"",
"Forever.",
"",
"Kandy yêu Bảo Trâm. ❤️🌹"
];

let index = 0;

playBtn.addEventListener("click", async () => {

    try{
        music.currentTime = 0;
        await music.play();
    }catch(e){
        alert("Không phát được nhạc.");
    }

    playBtn.innerText = "💞 Mãi yêu cậu";

    nextBtn.style.display = "inline-block";

    confetti({
        particleCount:220,
        spread:180,
        origin:{y:0.6}
    });

});

function openGift(){

    document.getElementById("home").style.display="none";
    document.getElementById("page1").style.display="block";

}

function nhanQua(){

    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";

}

function tuChoi(){

    soLanTuChoi++;

    if(soLanTuChoi<3){

        alert("🥺 Cho tớ thêm một cơ hội nhé...");

    }else{

        alert("💔 Nếu cậu vẫn không muốn nhận quà hãy chụp màn hình gửi Kandy nhé.");

        location.href="about:blank";

    }

}

function xemTiep(){

    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="block";

    typingMessage.innerHTML="";

    index=0;

    nextLine();

}
// ======================
// Gõ từng dòng
// ======================

function typeLine(text, callback){

    const div = document.createElement("div");

    typingMessage.appendChild(div);

    let i = 0;

    const timer = setInterval(()=>{

        if(i < text.length){

            div.innerHTML += text.charAt(i);

            i++;

        }else{

            clearInterval(timer);

            if(callback){

                setTimeout(callback,450);

            }

        }

    },55);

}

function nextLine(){

    if(index < texts.length){

        typeLine(texts[index],()=>{

            index++;

            nextLine();

        });

    }else{

        setTimeout(loveHeart,1200);

    }

}

// ======================
// Tim rơi
// ======================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="falling-heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,350);

// ======================
// Hoa anh đào
// ======================

function createSakura(){

    const sakura=document.createElement("div");

    sakura.className="sakura";

    sakura.innerHTML="🌸";

    sakura.style.left=Math.random()*100+"vw";

    sakura.style.animationDuration=(5+Math.random()*3)+"s";

    sakura.style.fontSize=(18+Math.random()*16)+"px";

    document.body.appendChild(sakura);

    setTimeout(()=>{

        sakura.remove();

    },8000);

}

setInterval(createSakura,450);

// ======================
// Sao băng
// ======================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"vh";

    star.style.left=(80+Math.random()*20)+"vw";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1300);

}

setInterval(shootingStar, 5000);
// ======================
// Hiệu ứng cuối
// ======================

function loveHeart(){

    confetti({
        particleCount:350,
        spread:200,
        origin:{y:0.6}
    });

    const final=document.createElement("div");

    final.className="final-love";

    final.innerHTML=`
    💖<br><br>

    Không cần cả thế giới.<br><br>

    Chỉ cần có cậu.<br><br>

    Mỗi khoảnh khắc bên cậu<br>
    đều là những kỷ niệm đáng trân trọng.<br><br>

    Cảm ơn cậu<br>
    đã xuất hiện trong cuộc sống của tớ.<br><br>

    Nếu một ngày cậu mệt mỏi,<br>
    hy vọng cậu sẽ nhớ rằng...<br><br>

    Luôn có một người<br>
    âm thầm mong cậu hạnh phúc.<br><br>

    Dù hôm nay,<br>
    ngày mai,<br>
    hay thật lâu về sau...<br><br>

    Tớ vẫn mong cậu<br>
    luôn bình an và mỉm cười.<br><br>

    ❤️ I Love You ❤️<br><br>

    Forever.<br><br>

    🌹 Kandy yêu Bảo Trâm 🌹
    `;

    document.body.appendChild(final);

    // Chữ bay xung quanh
    const loveTexts=[
        "I Love You ❤️",
        "Mãi bên cậu 💖",
        "Yêu cậu nhiều 🌹",
        "Forever ❤️",
        "Cảm ơn cậu 💕",
        "Bình an nhé 🌸"
    ];

    setInterval(()=>{

        const text=document.createElement("div");

        text.className="loveText";

        text.innerHTML=loveTexts[
            Math.floor(Math.random()*loveTexts.length)
        ];

        text.style.left=Math.random()*100+"vw";
        text.style.top=Math.random()*100+"vh";
        text.style.fontSize=(18+Math.random()*18)+"px";

        document.body.appendChild(text);

        setTimeout(()=>{
            text.remove();
        },6000);

    },500);

    // Pháo hoa liên tục
    setInterval(()=>{

        confetti({
            particleCount:120,
            spread:120,
            startVelocity:40,
            origin:{
                x:Math.random(),
                y:Math.random()*0.6
            }
        });

    },1800);

}