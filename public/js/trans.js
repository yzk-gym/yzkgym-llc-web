"use strict";

window.onload = function () {
  animateCSS('.treasure', 'bounce');
};

function animateCSS(element, animationName) {
  var node = document.querySelector(element);
  node.classList.add('animated', animationName, 'delay-1s');

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);
    animateCSS('.treasure', randomAnimeAction(animationName));
  }

  node.addEventListener('animationend', handleAnimationEnd);
}

function randomAnimeAction(animationName) {
  var animeActions = ['pulse', 'rubberBand', 'swing', 'shake'];

  if (animationName != null) {
    animeActions.filter(function (action) {
      return action != animationName;
    });
  }

  var randomNum = Math.floor(Math.random() * animeActions.length);
  return animeActions[randomNum];
}
