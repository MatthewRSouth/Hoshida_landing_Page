// Setting up the image carousel
let myIndex = 0;
carousel();

function carousel() {
  //function cycles through the images of the carosoul
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

//objects holding Japanese and English translations.
const jpnLang = {
  heroTitle: "楽しくてアクティブな英語", //楽しくてアクティブな英語の授業
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

const engLang = {
  heroTitle: "FUN and INTERACTIVE English Lessons!",
  heroDescription:
    "Kids learn better when they have fun, and our highly trained teachers make lessons that cater to having fun with the kids. We offer an immersive experience like no other, so schedule your trial today!",
  submit: "Show me a trial lesson!",
  attentionTitle: "Individual Attention",
  attentionDescription:
    "We have small classes and teachers have 5-7 kids at one time. We are able to give individual attention to each child and ensure they are getting the most of this valuable experience.",
  genuineEnglishTitle: "Genuine English",
  genuine_EnglishDescription:
    "We speak in English, and do activities in English. As teachers we pride ourselves with making genuine connections with the kids, and fostering their English speaking skills.",
  subjectsTitle: "Subjects",
  subjectsDescription:
    "English is the main subject we teach, but we also do art, science, math, and PE with the older children. We want them to be well rounded individuals who are able to excel in any subject.",
  family: "Learning like Family",
  games: "Learning English through Games",
  memories: "Creating Lasting Memories",
};

// JS to HTML Selectors
const slider = document.querySelector(".slider");

//hero section
const hero_heading = document.querySelector(".js-hero-heading");
const heroDescription = document.querySelector(".js-hero-description");
const heroInputName = document.querySelector(".hero-form-name");
const heroEmailName = document.querySelector(".hero-form-email");

//footer
const footerInputName = document.querySelector(".footer-form-name");
const footerEmailName = document.querySelector(".footer-form-email");
const footerSubmitBtn = document.querySelector(".js-footer-submit-button");

//submit button
const submitButton = document.querySelector(".js-submit-button");

//feature cards
const individualAttentionCardHeader = document.querySelector(
  ".js-card-header-individual-attention"
);
const individualAttentionCardDescription = document.querySelector(
  ".js-card-description-individual-attention"
);
const genuineEnglishCardHeader = document.querySelector(
  ".js-genuine-english-header"
);
const genuineEnglishCardDescription = document.querySelector(
  ".js-genuine-english-description"
);
const subjectsCardHeader = document.querySelector(".js-subjects-header");
const subjectsCardDescription = document.querySelector(
  ".js-subjects-description"
);
const familyDescription = document.querySelector(".js-family-description");
const gamesDescription = document.querySelector(".js-games-description");
const memoriesDescription = document.querySelector(".js-family-memories");
// Handles the state b/w English and Japanese languages, and changes the textcontent based on the desired language
if (slider) {
  slider.addEventListener("click", function () {
    if (this.dataset.lang === "EN" || !this.dataset.lang) {
      this.dataset.lang = "日本";
      this.style.setProperty("--slider-content", '"日本');
      hero_heading.textContent = jpnLang.heroTitle;
      heroDescription.textContent = jpnLang.heroDescription;
      heroInputName.placeholder = "お名前";
      heroEmailName.placeholder = "メールアドレス";
      footerInputName.placeholder = "お名前";
      footerEmailName.placeholder = "メールアドレス";
      submitButton.textContent = jpnLang.submit;
      footerSubmitBtn.textContent = jpnLang.submit;
      individualAttentionCardHeader.textContent = jpnLang.attentionTitle;
      individualAttentionCardDescription.textContent =
        jpnLang.attentionDescription;
      genuineEnglishCardHeader.textContent = jpnLang.genuineEnglishTitle;
      genuineEnglishCardDescription.textContent =
        jpnLang.genuine_EnglishDescription;
      subjectsCardHeader.textContent = jpnLang.subjectsTitle;
      subjectsCardDescription.textContent = jpnLang.subjectsDescription;
      familyDescription.textContent = jpnLang.family;
      gamesDescription.textContent = jpnLang.games;
      memoriesDescription.textContent = jpnLang.memories;
    } else {
      this.dataset.lang = "EN";
      this.style.setProperty("--slider-content", '"EN');
      hero_heading.textContent = engLang.heroTitle;
      heroDescription.textContent = engLang.heroDescription;
      heroInputName.placeholder = "Name";
      heroEmailName.placeholder = "E-mail";
      footerInputName.placeholder = "Name";
      footerEmailName.placeholder = "E-mail";
      submitButton.textContent = engLang.submit;
      footerSubmitBtn.textContent = engLang.submit;
      individualAttentionCardHeader.textContent = engLang.attentionTitle;
      individualAttentionCardDescription.textContent =
        engLang.attentionDescription;
      genuineEnglishCardHeader.textContent = engLang.genuineEnglishTitle;
      genuineEnglishCardDescription.textContent =
        engLang.genuine_EnglishDescription;
      subjectsCardHeader.textContent = engLang.subjectsTitle;
      subjectsCardDescription.textContent = engLang.subjectsDescription;
      familyDescription.textContent = engLang.family;
      gamesDescription.textContent = engLang.games;
      memoriesDescription.textContent = engLang.memories;
    }
  });
}
