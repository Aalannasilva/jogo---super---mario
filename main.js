const mario = document.queryselector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }
    ,500);
}

const loop = setInterval (() => {})





















document.addEventListener("Keydown", jump);


