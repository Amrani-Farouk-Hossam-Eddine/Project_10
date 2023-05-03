let lis = document.querySelectorAll(".shuffle li");
let skills = document.querySelector(".our-skills");
let stats = document.querySelector(".stats");
let progSpans = document.querySelectorAll(".prog span");
let boxs = document.querySelectorAll(".imgs-container .box");
let bullets = document.querySelectorAll('.bollets li')


// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//   });
// });

window.onscroll = function () {
  if (window.scrollY >= 600 ) {
    document.querySelector(".btn").style.display = "block";
  } else {
    document.querySelector(".btn").style.display = "none";
  }
};
document.querySelector(".btn").onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 300) {
    progSpans.forEach((e) => {
      e.style.width = e.dataset.progress;
    });
  }
};

lis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImages);
});

function removeActive() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImages() {
  boxs.forEach((box) => {
    box.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", function (e) {
    bullets.forEach((bullet) => {
      bullet.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});