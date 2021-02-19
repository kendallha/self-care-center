var mantraButton = document.querySelector('#mantra');
var affButton = document.querySelector('#affirmation');
var receiveMsgBtn =  document.querySelector('#receive-message');
var message = document.querySelector('#message');
var bellIcon = document.querySelector('#bell');
var loginButton = document.querySelector('#login-button');
var nameInput = document.querySelector('#login-box');
var mainPage = document.querySelector('.main-page');
var loginPage = document.querySelector('.login-page');
var welcomeMsg = document.querySelector('#welcome-message');
var viewFavs = document.querySelector('#view-favorites');
var favPage = document.querySelector('.favorites-page');
var favsList = document.querySelector('ul');
var returnButton = document.querySelector('#return');
var savedHeader = document.querySelector('#fav-messages');
var heart = document.querySelector('#heart');

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Do not let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
]

var savedMsgs = [];

nameInput.addEventListener('click', removeDefault);
loginButton.addEventListener('click', enterSite);
receiveMsgBtn.addEventListener('click', displayMessage);
heart.addEventListener('click', saveMsg);
viewFavs.addEventListener('click', viewFavPage);
returnButton.addEventListener('click', returnToMain);
favPage.addEventListener('dblclick', removeMsg);

function removeDefault() {
  nameInput.value = "";
}
function enterSite() {
  var name = nameInput.value;
  mainPage.classList.remove('hidden');
  loginPage.classList.add('hidden');
  welcomeMsg.innerText = `Hello, ${name}. Click below for some inspiration...`;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMessage() {
  if (mantraButton.checked) {
    message.innerText = mantras[getRandomIndex(mantras)];
  } else if (affButton.checked) {
    message.innerText = affirmations[getRandomIndex(affirmations)];
  } else {
    return;
  }
  bellIcon.classList.add('hidden');
  heart.classList.remove('hidden');
}

function saveMsg() {
  if (!savedMsgs.includes(message.innerText)) {
  savedMsgs.push(message.innerText);
  viewFavs.classList.remove('hidden');
}
}

function viewFavPage() {
  var name = nameInput.value;
  mainPage.classList.add('hidden');
  favPage.classList.remove('hidden');
  savedHeader.innerText = `${name}'s Favorite Messages`
  favsList.innerHTML = '<ul></ul>';
  for (var i = 0; i < savedMsgs.length; i++) {
    favsList.insertAdjacentHTML(`beforeend`, `<li id=${i}>${savedMsgs[i]}</li>`);
  }
}

function returnToMain() {
  favPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
}

function removeMsg(event) {
  var i = event.target.id;
    savedMsgs.splice(i,1);
  viewFavPage();
}
