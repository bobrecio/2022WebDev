var buttons = document.querySelectorAll(".drum");
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        drumSound(this.innerText);
        buttonAnimation(this.innerText);
    });
}

document.addEventListener("keydown", function (event) {
    drumSound(event.key);
    buttonAnimation(event.key);
})

function drumSound(drumLetter) {
    switch (drumLetter) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            var bass = new Audio('./sounds/kick-bass.mp3');
            bass.play();
            break;
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log(this);
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}