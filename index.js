var buttons = document.querySelectorAll("button.drum");

buttons.forEach(e => {
    e.addEventListener("click", function () {
        const key = this.textContent;
        makeSound(key);
        buttonAnimation(key);
    });
});

document.addEventListener("keydown", function(event) {
    const key = event.key;
    makeSound(key);
    buttonAnimation(key);
});

function makeSound(key) {
    var audio;

    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log("ERROR: the key pressed has no sound associated");
            break;
    }
}

function buttonAnimation(key){
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100);
}

