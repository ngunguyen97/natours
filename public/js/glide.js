/* eslint-disable */
console.log('Hello from glide');

const config = {
  type: 'carousel',
  startAt: 0,
  perView: 4,
  gap: 60,
  breakpoints: {
    1024: {
      perView: 2,
      gap: 10
    },
    600: {
      perView: 1
    }
  }
};

new Glide('.glide', config).mount();
