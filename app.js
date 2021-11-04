// import functions and grab DOM elements
const catSoundEl = document.getElementById('cat');
const dogSoundEl = document.getElementById('dog');
const horseSoundEl = document.getElementById('horse');

const catImgEl = document.getElementById('catImg');
const dogImgEl = document.getElementById('dogImg');
const horseImgEl = document.getElementById('horseImg');


// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


catImgEl.addEventListener('click', () => {
    catSoundEl.play();
});

dogImgEl.addEventListener('click', () => {
    dogSoundEl.play();
});

horseImgEl.addEventListener('click', () => {
    horseSoundEl.play();
});
