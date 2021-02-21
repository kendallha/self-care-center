var affButton = document.querySelector('#affirmation');
var bellIcon = document.querySelector('#bell');
var favPage = document.querySelector('.favorites-page');
var favsList = document.querySelector('ul');
var heart = document.querySelector('#heart');
var loginButton = document.querySelector('#login-button');
var loginPage = document.querySelector('.login-page');
var mainPage = document.querySelector('.main-page');
var mantraButton = document.querySelector('#mantra');
var message = document.querySelector('#message');
var nameInput = document.querySelector('#login-box');
var receiveMsgBtn =  document.querySelector('#receive-message');
var returnButton = document.querySelector('#return');
var savedHeader = document.querySelector('#fav-messages');
var viewFavs = document.querySelector('#view-favorites');
var welcomeMsg = document.querySelector('#welcome-message');

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
];
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
var savedMsgs = [];

nameInput.addEventListener('click', removeDefault);
loginButton.addEventListener('click', enterSite);
receiveMsgBtn.addEventListener('click', displayMessage);
heart.addEventListener('click', saveMsg);
viewFavs.addEventListener('click', viewFavPage);
returnButton.addEventListener('click', returnToMain);
favPage.addEventListener('dblclick', removeMsg);

function hide(element) {
  element.classList.add('hidden');
}

function display(element) {
  element.classList.remove('hidden');
}

function removeDefault() {
  nameInput.value = "";
}

function enterSite() {
  var name = nameInput.value;
  display(mainPage);
  hide(loginPage);

  if (name === "") {
  welcomeMsg.innerText = `Hello, beautiful. Click below for some inspiration...`;
  } else {
  welcomeMsg.innerText = `Hello, ${name}. Click below for some inspiration...`;
 }
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
  hide(bellIcon);
  display(heart);
}

function saveMsg() {
  if (!savedMsgs.includes(message.innerText)) {
  savedMsgs.push(message.innerText);
  display(viewFavs);
  }
}

function viewFavPage() {
  var name = nameInput.value;
  hide(mainPage);
  display(favPage);

  if (name === "") {
  savedHeader.innerText = `Favorite Messages`;
  } else {
  savedHeader.innerText = `${name}'s Favorite Messages`;
  }

  favsList.innerHTML = '<ul></ul>';
  for (var i = 0; i < savedMsgs.length; i++) {
    favsList.insertAdjacentHTML(`beforeend`, `<li id=${i}>${savedMsgs[i]}</li>`);
  }
}

function returnToMain() {
  hide(favPage);
  display(mainPage);
}

function removeMsg(event) {
  var i = event.target.id;
    savedMsgs.splice(i,1);
  viewFavPage();
}
