let ALL_EMOJI;
const buttonStart = document.querySelector('.start');
const buttonStop = document.querySelector('.stop');
const inputField = document.querySelector('.input');
buttonStart.addEventListener('click', startRender);
buttonStop.addEventListener('click', stopRender);
let id = 0;
let interval;
let isStart = false;


// document.body.style.overflow = 'hidden';
// document.body.style.backgroundColor = '#fgfghh'

function startRender() {
  if (inputField.value.trim() === '') {
    return;
  }
  ALL_EMOJI = inputField.value
    .split(',')
    .map(item => {
      return item.trim()
    })
    .filter(item => {
      return item !== '';
    })

  console.log(ALL_EMOJI)

  //console.log(testEmoji)
  if (!isStart) {
    interval = setInterval(() => {
      renderEmoji();
    }, 200)
    isStart = true;
  }

}

function stopRender() {
  if (isStart) {
    clearInterval(interval);
    isStart = false;
  }
}


function renderEmoji() {
  const whichEmoji = getRandom(0, ALL_EMOJI.length - 1);
  let newEmoji = document.createElement('span');
  id++
  newEmoji.setAttribute('id', `${id}`);
  newEmoji.style.fontSize = `${getRandom(15, 50)}px`;
  newEmoji.style.position = 'absolute';
  newEmoji.style.top = '-50px';
  newEmoji.style.left = `${getRandom(50, window.innerWidth) - 50}px`;
  let transition = getTransition(parseInt(newEmoji.style.fontSize));
  newEmoji.style.transition = `all ${transition}s linear`;
  newEmoji.insertAdjacentHTML('afterbegin', `
  ${ALL_EMOJI[whichEmoji]}
  `)


  document.body.append(newEmoji);
  //console.log(transition)

  let currItem;


  setTimeout(() => {
    currItem = document.querySelector(`span[id='${id}']`)
    currItem.style.top = '130%';
  }, 100)


}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getTransition(fz) {
  return (1 / fz) * 130;
}



