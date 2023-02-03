import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const createPromisesBtn = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    });
  });
}

createPromisesBtn.addEventListener('click', evt => {
  evt.preventDefault();
  let firstDelay = Number(delay.value);
  let stepDelay = Number(step.value);
  for (let i = 0; i < amount.value; i+=1) {
    createPromise(1 + i, firstDelay + i * stepDelay).then(({position, delay}) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
    }).catch(({position, delay}) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)
    })
  }
});
