const guessDiceNumber = (number) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number === randomNumber) {
        resolve('correct');
      } else {
        reject('incorrect');
      }
    }, 500);
  });
};

guessDiceNumber(5)
  .then((message) => console.log(`The number was ${message}`))
  .catch((message) => console.log(`The number was ${message}`));
