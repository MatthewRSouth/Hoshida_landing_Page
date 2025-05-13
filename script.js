const changeLang = {};
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.querySelectorAll(".mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("showing");
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].classList.add("showing");
  setTimeout(carousel, 3000); //change every 3 seconds
}

const changeLang = {};
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.querySelectorAll(".mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("showing");
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].classList.add("showing");
  setTimeout(carousel, 3000); //change every 3 seconds
}
