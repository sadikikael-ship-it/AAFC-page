(() => {
  'use strict';

  const cloudinarySeed = [
    'https://res.cloudinary.com/demo/image/upload/w_900,h_900,c_fill/sample.jpg',
    'https://res.cloudinary.com/demo/image/upload/w_900,h_900,c_fill/animals/dog_closeup.jpg',
    'https://res.cloudinary.com/demo/image/upload/w_900,h_900,c_fill/animals/cat.jpg',
    'https://res.cloudinary.com/demo/image/upload/w_900,h_900,c_fill/balloons.jpg',
    'https://res.cloudinary.com/demo/image/upload/w_900,h_900,c_fill/pets_dog.jpg'
  ];

  const gallery = Array.from({ length: 45 }, (_, idx) => cloudinarySeed[idx % cloudinarySeed.length]);

  window.APP_DATA = Object.freeze({
    gallery,
    services: [
      { name: 'Signature Bath', price: '$55+', desc: 'Bath, blow dry, light trim and finish.' },
      { name: 'Touch Up', price: '$65+', desc: 'Face, feet, sanitary tidy + bath refresh.' },
      { name: 'Full Groom', price: '$85+', desc: 'Full haircut, bath, blow dry, complete finish.' }
    ],
    addons: ['Nails', 'Ears', 'Sanitary Trim', 'Paw Trim', 'Teeth', 'Combo']
  });
})();
