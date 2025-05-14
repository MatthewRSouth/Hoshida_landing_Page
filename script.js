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
const jpnLang = {
  heroTitle: "楽しくてアクティブな英語の授業",
  heroDescription:
    "子どもたちは楽しいと感じた時に,より多くのことを学びます。経験豊かな先生たちが子どもたちが夢中になれる楽しいレッスンを提供します。他ではできない海外にいるような体験をしに来てください。まずは無料体験のご予約を!",
  submit: "ご予約される方はこちら!",
  attentionTitle: "少人数クラス",
  attentionDescription:
    "１クラスは５人から７人の少人数で、先生たちが一人一人に目を配り、それぞれに合ったサポートができます。子どもたちにとって大切な学びの時間を、最大限に活かせる環境作りをしています。",
  genuineEnglishTitle: "本物の英語にふれる",
  genuine_EnglishDescription:
    "先生たちとのやりとりはもちろん、日々のすべての活動も英語で行うことによって、子どもたちと強いつながりを作りながら、英語力を育てます。",
  subjectsTitle: "英語以外の学び",
  subjectsDescription:
    "メインは英語ですが、４歳児クラスからアート、サイエンス、算数、体育、音楽の授業を行っています。私たちは子どもたちに、様々な分野でバランスよく知識を得てほしいと思っています。",
  family: "家族のようなつながり",
  games: "ゲームで英語を楽しく学ぶ",
  memories: "心に残る思いで作り",
};

const slider = document.querySelector(".slider");

if (slider) {
  slider.addEventListener("click", function () {
    if (this.dataset.lang === "EN" || !this.dataset.lang) {
      this.dataset.lang = "日本";
      this.style.setProperty("--slider-content", '"日本');
    } else {
      this.dataset.lang = "EN";
      this.style.setProperty("--slider-content", '"EN');
    }
  });
}
