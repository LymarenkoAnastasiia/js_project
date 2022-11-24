// console.log(this);

//alert(); //window.alert()

// console.dir(document);

function getAlert(event) {
    const btn = event.target;
    if(btn.style.backgroundColor === 'red') {
        btn.style.backgroundColor = 'unset';
    } else {
        btn.style.backgroundColor = 'red';
    }
    //console.log(event);
    // alert('Hello, user');
}

const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', getAlert);
//buttonElement.addEventListener('mouseenter', hello);

/*Завдання
зробіть кнопку, додайте їй ID, напишіть функцію, яка виводить консоль "привіт".
навісити обробку події наведення миші на кнопку


//Рішення
function hello() {
    console.log('Привіт');
}

const buttonElement2 = document.getElementById('btn2');
buttonElement2.addEventListener('mouseenter', hello);
*/


/*Завдання
зробіть кнопку одноразовою.
коли натискаємо на кнопку, властивість display у кнопки повинна стати none
*/

//Рішення
function fadeButton(event) {
    const btn = event.target;
    btn.style.display = 'none'
}

const fadeButtonElement = document.getElementById('fade');
fadeButtonElement.addEventListener('click', fadeButton);



function RemoveEventListenerFun(event) {
    console.log(event);
    event.target.removeEventListener('click', RemoveEventListenerFun);
}

const RemoveEventListener1 = document.getElementById('RemoveEventListener');
RemoveEventListener1.addEventListener('click', RemoveEventListenerFun);



function functionInside(event) {
    console.log(event);
    event.target.removeEventListener('click', functionInside);
}

const anotherBtn = document.getElementById('another-btn');
anotherBtn.addEventListener('click', functionInside);



const form = document.getElementById('name-form');
form.addEventListener('submit', consoleForm);

function consoleForm(event) {
    event.preventDefault();
    console.log(event);
    const form = event.target;
    const value = form[0].value;
    console.log(value);
}


/*Завдання
напишіть функцію, яка вітаю користувача за його ім'ям.
Ім'я користувача брати з інпуту форми
*/

//Рішення
const formName = document.getElementById('hi-user');
formName.addEventListener('submit', sayHi);

function sayHi(event) {
    event.preventDefault();
    const form = event.target;
    const value = form[0].value;
    alert(`Hello, ${value}`);
}


const collection = document.getElementsByClassName('paragraph');
console.log(collection);
for (const p of collection) {
    p.style.color = 'green';
}

const buttons = document.getElementsByTagName('button');
console.log(buttons);


const array = [...buttons];
console.log(array);


function helloUser() {
    console.log('Hello, user');
}

//variant 1
buttons[0].addEventListener('click', helloUser);
buttons[1].addEventListener('click', helloUser);
buttons[2].addEventListener('click', helloUser);

//vatiant 2
for(const btn of buttons) {
    btn.addEventListener('click', helloUser);
}


const btn3 = document.querySelector('#button2');   //повертає перший елемент, який задовольнює селектор
console.log(btn3);

const btn4 = document.querySelectorAll('button');   //повертає всі елементи, які задовольнують селектор
console.log(btn4);

const btn5 = document.querySelectorAll('p:nth-child(even)');  //поверне четные элементы
console.log(btn5);

for(const par of btn5) {
    par.style.color = 'red';  //кожен другий параграф червоний
}



/*Завдання

*/