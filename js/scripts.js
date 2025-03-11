// Change Variable
let stylemode = document.cookie;

// Change Variable
let stylelink = document.getElementById('style');

// Conditional Branch with Else Branch
if (stylemode == 'dark') {
    // Change the href property of the 'link'
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
    stylemode = 'light'
    document.cookie = 'light';
}

// Common Event
function switchmode() {
    // Conditional Statement with Else Branch
    if (stylemode == 'light') {
        stylemode = 'dark'
        stylelink.href = 'css/dark.css';
        document.cookie = 'dark';
    } else {
        stylemode = 'light'
        stylelink.href = 'css/light.css';
        document.cookie = 'light';
    }
}

function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display == 'block') {
        toolbarbuttons.style.display = 'none';
    } else {
        toolbarbuttons.style.display = 'block';
    }
}
var audio = new Audio('bad-to-the-bone.mp3');
var playbutton = document.getElementById("play");
var scorebox = document.getElementById("score");
var score = 0;
var time = 60;
var timebox = document.getElementById("time");

setInterval(() => {
    if (time > 0) {
        time -= 1;
        timebox.innerHTML = "time;" + time;
    }
    else { playbutton.style.display = 'none' }
    if (time == 0 && score > 200) {
        show_image()
        time -= 1;

    }
}, 1000);

function move() {
    if (time > 0) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        soundGo();
        playbutton.style.top = y + "px";
        playbutton.style.left = x + "px";
        playbutton.style.position = 'absolute';
        score += 1;
        scorebox.innerHTML = "score; " + score;


    }

}
move();




function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = "/img/removebg-preview.png";
    img.width = 4;
    img.height = 4
    img.alt = alt;
    img.id = "cool"
    document.body.appendChild(img);
}
function soundGo() {
    var audio2 = new Audio('short-yippee-sound-effect-101soundboards.mp3');
    audio2.play();
}