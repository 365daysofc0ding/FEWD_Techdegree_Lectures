// A tiny bit of JavaScript DOM manipulation just for fun

const names = ["Favorites", "Preferiti"];
const heading = document.querySelector('.heading-secondary');
const randomNumber = Math.trunc((Math.random() * names.length));

heading.innerHTML = names[randomNumber];