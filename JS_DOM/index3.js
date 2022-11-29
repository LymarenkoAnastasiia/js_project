/*
Дан section, на якій треба клацати мишею
Дан div, який має переміститись на точку, в яку клацнули мишею
*/

//Рішення
// const field = document.querySelector("#game-field");
// const box = document.querySelector("#box");
// const divCounter = document.querySelector("#counter");

// let counter = 0;

// field.addEventListener("click", clickHandler, { capture: true });

// function clickHandler(event) {
//   const {
//     currentTarget,
//     target,
//     currentTarget: {
//       children: { box },
//     },
//   } = event;
//   if (currentTarget !== target) {
//     updateCounter();
//   }
//   box.style.top = `${randomCoordinates(currentTarget.offsetHeight)}px`;
//   box.style.left = `${randomCoordinates(currentTarget.offsetWidth)}px`;
// }

// function updateCounter() {
//   divCounter.textContent = ++counter;
// }

// function randomCoordinates(max) {
//   return Math.floor(Math.random() * max);
// }

//1. Створити новий елемент
// const div = document.createElement("div");
// div.append("Hello, JS!");
// console.log(div);

// //2. Приєднати елемент до будья-якого існуючого батьківського елемента
// const body = document.body;
// console.log(body);
// body.append(div);

/*Задача
Створити картинку і вставити ії в div.
*/

//Рішення
// const div2 = document.createElement('div');
// const img = document.createElement('img');
// img.setAttribute("src", './images/blackieshoot-CXc545c989c-unsplash.jpg')
// div.append(img);

//User Cards
const telephone = {
  name: "Samsung",
  avatar: "./",
  description: "blablabla",
  price: "100$",
};

const telephoneArray = [
  {
    name: "Samsung",
    avatar: "./",
    description: "blablabla",
    price: "100$",
  },
  {
    name: "Nokia",
    avatar: "./",
    description: "blablabla",
    price: "50$",
  },
  {
    name: "Huawei",
    avatar: "./",
    description: "blablabla",
    price: "200$",
  },
  {
    name: "iPhone",
    avatar: "./",
    description: "blablabla",
    price: "1030$",
  },
];

//console.log(`Телефон ${telephone.name} коштує ${telephone.price}`);

// for(const tel of telephoneArray) {
//     console.log(`Телефон ${tel.name} коштує ${tel.price}`);
// }

/* <article class="card-wrapper">
<img class="card-image" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="John">
<h2 class="username">John</h2>
<p class="description">fafewqrewrqwer2322revzd</p>
</article> */



const root = document.querySelector('#root');

function createCard(user) {
    // const article = document.createElement('article');
    // article.classList.add('card-wrapper');

    // const img = document.createElement('img');
    // img.classList.add('card-image');
    // img.setAttribute('src', user.profilePicture);
    // img.addEventListener('load', imageLoadHandler);
    // img.setAttribute('alt', user.name);

    // const img = createUserImage(user);

    // const imgWrapper = createElement('div', {classNames: ['image-wrapper']});

    // const h2 = document.createElement('h2');
    // h2.classList.add('username');
    // h2.append(user.name);

    const imageWrapper = createImageWrapper(user);

    const h2 = createElement('h2', {classNames: ['username']}, user.name);

    // const p = document.createElement('p');
    // p.classList.add('description');
    // p.append(user.description);
    const p = createElement('p', {classNames: ['description']}, user.description);
    
    return createElement('article', {classNames: ['card-wrapper']}, imageWrapper, h2, p);
}

const cardArray = data.map((user) => createCard(user));


root.append(...cardArray);

/**
 * 
 * @param {String} type - тип елемента, що треба створити
 * @param {Object} options
 * @param {String[]} options.classNames - список классів 
 * @param  {...Node} children - список дочірніх вузлів
 */

 function createElement(type, {classNames}, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
  }

  function createImageWrapper(user) {
    const imgWrapper = createElement('div', {classNames: ['image-wrapper']});
    imgWrapper.setAttribute('id', `wrapper${user.id}`);
    imgWrapper.style.backgroundColor = stringToColor(user.name);
    const img = createUserImage(user);
    return imgWrapper;
  }

  function createUserImage(user) {
    const img = document.createElement('img');
    img.classList.add('card-image');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.dataset.id = user.id;

    img.addEventListener('load', imageLoadHandler);
    img.addEventListener('error', imageErrorHandler);

    return img;
  }

  function imageLoadHandler({target}) {
    console.log('image sucessfully loaded');
    const parentWrapper = document.getElementById(`wrapper${target.dataset.id}`);
    parentWrapper.append(target);
  }

  function imageErrorHandler({target}) {
    target.remove();
    console.log('image loading error');
  }


  /* Utils function */
  function stringToColor(str) {
    let hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (var i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }



  

