/*Завдання
  1. зробити input для вводу текста
  2. зробити кнопку, яка по натисненню перетворює текст з input на елемент списку

  <input type="text" />
  <button>Click to add</button>
  <ul>
  <li>Зробити щось одне</li>
  <li>Зробити щось інше</li>
  </ul>


  Задача з *:
до кожного li приєднати кнопку, за допомогою якої елемент зі списку можна видалити

Задача з **:
до кожного li доєднати другу кнопку, за натиснення якої можна відредагувати текст li
Створювати новий input поряд з li, кнопка яка була до зміни

Як це все має виглядати?

<li> Some text <button>Change text</button><button>Delete</button>

---> якщо натиснути на change text <---

<li> Some text <input type="text"><button>Save</button></li>
  */

//Рішення
// const form = document.getElementById('form');
// const root = document.getElementById('root');

// const state = []; //тут будуть таски

// form.addEventListener('submit', addItem);

// function addItem(event) {
//     event.preventDefault();
//     const {target, target: {textInput: {value}}} = event;
//     state.push(value);
//     const li = createItem(value);
//     root.append(li);
//     target.reset();
// }

// function createItem(value) {
//     const li = document.createElement('li');
//     li.append(value);
//     li.classList.add('item');
//     return li;
// }

/*Завдання
1. В html створити квадрат 50х50
2. За натисненням на квадрат створити input для вводу тексту
3. За ентером інпут зикає, а в квадраті відображається те, що було введено в інпут
*/

// const box = document.querySelector('#box');

// box.addEventListener('click', boxClickHandler);

// function boxClickHandler(event) {
//     const input = document.createElement('input');
//     input.addEventListener('keydown', inputKeyHandler);
//     const parent = event.target.parentNode;
//     parent.append(input);
//     box.removeEventListener('click', boxClickHandler);
// }

// function inputKeyHandler({target, target: {value, previousElementSibling}}) {
//     if(event.keyCode === 13) {
//         // 2. передели данні сусідньому елементу(боксу)
//         previousElementSibling.textContent = value;
//         // 1. знищили сам інпут
//         target.remove();
//         box.addEventListener('click', boxClickHandler);
//     }
// }

// Регулярные выражения
// const regex = /^Test$/; // шукаємо слово Test
// /^[A-Za-z]{2,5}$/; //шукаємо слово з 2-5 літер великих чи маленьких

// const testString = "sunnyday23@gmail.com";

// const reg1 = /^[A-Za-z]{2,5}$/;
// console.log(reg1);
// const reg2 = new RegExp("^[A-Za-z0-9_.]+@[[A-Za-z0-9]+.[A-Za-z0-9]+$");

// // const btn = document.querySelector('#btn');

// // btn.addEventListener('click', clickHandler);

// // function clickHandler() {
// //     console.log('BUTTON');
// // }

// // setTimeout(func, 2000);

// // function func() {
// //     console.log(2+2);
// // }

// const helloTimeoutId = setTimeout(function () {
//   console.log("LOGGING");
// }, 15000);
// clearTimeout(helloTimeoutId);
// //func();

// //const intervalID = setInterval(function () {console.log('LOGGING')}, 2000);

// /* JSON */

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   avatar: "https://...",
//   age: 23,
//   footSize: 40,
// };

// console.log(JSON.stringify(user));

// /*Fetch Promise */

// const p = fetch("./user.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//Error in ./user.json
//variant 1
// const p1 = fetch("./uer.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then(
//     (data) => {
//       console.log(data);
//     },
//     (err) => {
//       console.log(err);
//     }
//   ); //отрабатывает в случае ошибки

// //variant 2
// const p2 = fetch("./uer.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     //отрабатывает в случае ошибки
//     console.log("ERROR HAPPENED " + err);
//   });

//Finally

// const p3 = fetch("./user.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("ERROR HAPPENED " + err);
//   })
//   .finally(() => {
//     // отрабатывает в любом случае
//     console.log("FINALLY question closed");
//   });

//Promise создание

// const p4 = new Promise(executor);

// console.log(p4);

// function executor(resolve, reject) {
//   const number = Math.floor(Math.random() * 15); //генерація цілого випадкового числав діапазоні від 0 до 15
//   if (number % 2 === 0) {
//     //якщо це число кратне 2
//     resolve(number);
//   } else {
//     //якщо число не кратне 2
//     const err = new RangeError("Error happened");
//     reject(err);
//   }
// }

// p4.then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );





//Weather widget


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

/*
Задача: зробити погодний віджет
Алгоритм вирішення:
+1. Зробити верстку елементів, які отримують від користувача дані про місто
+2. Отримати дані і обробити їх (підготовувати до запиту на сервер)
+3. Зробити запит на сервер і отримати відповідь.
+4. Обробити дані відповіді та відобразити користувачу. 
*/

const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('.btn');

btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({target}) {
  const selectValue = target.previousElementSibling.value;
  requestAPI(selectValue)
}

function requestAPI(city) {
  // готуємо URL
  const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then((response) => {return response.json()})
  .then((data) => {displayWeather(data)})
}

function displayWeather(weatherData) {
  const {name, main: {temp, pressure}, weather} = weatherData; // !!!!!
  const [{description}] = weather;

  const article = document.querySelector('#weather-box');
  article.classList.remove('weather');

  appendInfo('city', name);
  appendInfo('temp', temp);
  appendInfo('press', pressure);
  appendInfo('descr', description);
}

function appendInfo(id, info) {
  const element = document.querySelector(`#${id}`);
  element.textContent = info;
}