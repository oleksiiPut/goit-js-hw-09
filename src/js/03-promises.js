const form = document.querySelector('.form');
const delay = document.querySelector('[name=delay]');
const step = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const timer = setTimeout(() => {
    for (let i = 1; i <= amount.value; i += 1) {
      let position = i;
      let totalStep = +delay.value + +step.value * i;
      createPromise(position, totalStep)
        .then(({ position, totalStep }) => {
          console.log(`✅ Fulfilled promise ${position} in ${totalStep}ms`);
        })
        .catch(({ position, totalStep }) => {
          console.log(`❌ Rejected promise ${position} in ${totalStep}ms`);
        });
    }
  }, delay.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
