"use strict";

const questionEl = document.querySelector(".question");
const thanksEl = document.querySelector(".thanks");

const numbersEl = document.querySelector(".numbers");
const buttonEl = document.querySelector("button");
const infoSelectionEl = document.querySelector(".info-selection");

let currentSelectionEl = null;

function handleDigitClick(e) {
  const clicked = e.target.closest(".circle");
  if (clicked === null) return;

  clicked.classList.add("active");

  if (currentSelectionEl !== null) {
    currentSelectionEl.classList.remove("active");
  }

  currentSelectionEl = clicked;
}

function getCurrentSelectionText() {
  if (currentSelectionEl === null) return "";

  const digitEl = currentSelectionEl.querySelector(".digit");
  return digitEl.textContent;
}

function setInfoText(selectionString) {
  if (infoSelectionEl === null) return;

  infoSelectionEl.textContent = selectionString;
}

function toggleCards() {
  if (questionEl === null || thanksEl === null) return;

  questionEl.classList.toggle("hidden");
  thanksEl.classList.toggle("hidden");
}

function handleSubmit(e) {
  e.preventDefault();

  if (currentSelectionEl === null) return;

  const selectionString = getCurrentSelectionText();
  setInfoText(selectionString);

  toggleCards();
}

function initListeners() {
  if (numbersEl === null) return;

  numbersEl.addEventListener("click", handleDigitClick);

  if (buttonEl === null) return;

  buttonEl.addEventListener("click", handleSubmit);
}

initListeners();
