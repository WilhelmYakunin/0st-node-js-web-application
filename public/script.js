'use strict';

let btn = document.querySelector('.menu-container-btn');
let firstSpan = document.querySelector('span:first-child');
let secondSpan = document.querySelector('span:nth-child(2)');
let lastSpan = document.querySelector('span:last-child');
let siteNavagation = document.querySelector('.site-navagation');
let logo = document.querySelector('.menu-container-logo p');
let count = 0;

btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    
    if (count == 0) {
      firstSpan.classList.toggle("btn-transition-fisrt");
      secondSpan.classList.toggle("btn-transition-second");
      lastSpan.classList.toggle("btn-transition-last");
      siteNavagation.classList.toggle("visible");
    } else {
      firstSpan.classList.toggle("btn-transition-first-back");
      secondSpan.classList.toggle("btn-transition-second-back");
      lastSpan.classList.toggle("btn-transition-last-back");
      siteNavagation.classList.toggle("un-visible");
    } return count--;
});

let introInfoStructure = document.querySelector('.intro-structur');
let paperPrototypeContainer = document.querySelector('.paper-prototype-container');

function hideInroInfoDiv () {
  introInfoStructure.classList.add("un-visible");
 };

function hideInroPaperPrototypeDiv () {
  paperPrototypeContainer.classList.add("un-visible");
};

setTimeout(hideInroInfoDiv, 5000);
setTimeout(hideInroPaperPrototypeDiv, 5000);


let prototypeText = document.querySelector('.interactive-portotype-text');
let arr = ['и','н', 'т', 'е', 'р', 'а', 'к', 'т', 'и', 'в', 'н', 'ы', 'й',
          '&nbsp;', 'п', 'р', 'о', 'т', 'о', 'т', 'и', 'п'];
let delay = 200;
for(let i = 0; i <arr.length; i += 1) {
    setTimeout(function(i) {
        return function() {
            let span = document.createElement('p');
            span.classList.add("big-grey");
          span.innerHTML = `${arr[i]}`;
          prototypeText.before(span);
        };
    }(i), delay*(i));
}

let interactivePortotype = document.querySelector('.interactive-portotype');

function hideInteractivePortotypeDiv () {
  interactivePortotype.classList.add("un-visible");
};

setTimeout(hideInteractivePortotypeDiv, 5000);
