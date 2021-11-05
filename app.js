// import functions and grab DOM elements
const indicatorEl = document.getElementById('clickedOn');


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

// this is what will make the cat sound play
catImgEl.addEventListener('click', () => {
    catSoundEl.play();
    indicatorEl.textContent = 'You Clicked on the CAT';
});

// this is what will make the dog sound play
dogImgEl.addEventListener('click', () => {
  dogSoundEl.play();
  indicatorEl.textContent = 'You Clicked on the DOG';
});

// this is what will make the horse sound play
horseImgEl.addEventListener('click', () => {
  horseSoundEl.play();
  indicatorEl.textContent = 'You Clicked on the HORSE';
});


// this is what will make the all sounds play depending on the key pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    catSoundEl.play();
    indicatorEl.textContent = 'You Clicked on the CAT';
  }

  if (event.key === 'd') {
    dogSoundEl.play();
    indicatorEl.textContent = 'You Clicked on the DOG';
  }

  if (event.key === 'h') {
    horseSoundEl.play();
    indicatorEl.textContent = 'You Clicked on the HORSE';
  }
});


// started function to play sound no matter the animal
// function playSoundAnimal(soundEL, contentEl) {
//   soundEL.play();
//   contentEl.textContent = 'You Clicked on the DOG';
// }