const mario = document.queryselector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }
    ,500);
}

const loop = setInterval (() => {
const pipeposition = pipe.offsetLesft;
const marioPosition = +window.getcomputedStyle;(mario).bottom.replace("px","");

if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  pipe.style.animation = "none";
  pipe.style.left = `${pipePosition}px´;

  mario.style.animation = "none";
  mario.style.left = ´${maroPositin}px´;

  mario.scr = "./img/game-over.png";
  mario.style.width = "75px";
  mario.style.marginLeft = "50px";

  clearInterval(loop);
  
});

document.addEventListener("Keydown", jump);

