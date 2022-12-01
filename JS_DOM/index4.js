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
const regex = /^Test$/;  // шукаємо слово Test
/^[A-Za-z]{2,5}$/;  //шукаємо слово з 2-5 літер великих чи маленьких

const testString = 'sunnyday23@gmail.com';

const reg1 = /^[A-Za-z]{2,5}$/;
console.log(reg1);
const reg2 = new RegExp('^[A-Za-z0-9\_\.]+\@[[A-Za-z0-9]+\.[A-Za-z0-9]+$');




// const btn = document.querySelector('#btn');

// btn.addEventListener('click', clickHandler);

// function clickHandler() {
//     console.log('BUTTON');
// }

setTimeout(func, 2000);

function func() {
    console.log(2+2);
}

const helloTimeoutId = setTimeout(function () {console.log('LOGGING')}, 15000);
clearTimeout(helloTimeoutId);
//func();


//const intervalID = setInterval(function () {console.log('LOGGING')}, 2000);



/* JSON */

const user = {
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'https://...',
    age: 23,
    footSize: 40,
}

console.log(JSON.stringify(user));