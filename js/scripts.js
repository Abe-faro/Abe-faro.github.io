// Change Variable
let stylemode = document.cookie;

// Change Variable
let stylelink = document.getElementById('style');

// Conditional Branch with Else Branch
if (stylemode  == 'dark') {
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
var audio2 = new Audio('short-yippee-sound-effect-101soundboards.mp3');