/* Логічні оператори */
// Boolean
/*
const a1 = true;
!a; // false
// ! - заперечення
!!a; // true
// !! - подвійне заперечення використовується для приведення значення до типу даних Boolean
let b2 = "dfgfdg";
console.log(typeof !!b, b);
/*
Boolean(); // явне приведення типу до Boolean

4 > 5; // false
7 < 9; // true
console.log(7 < 9);

// Порівняння рядків

const res10 = "a" > "A"; // a unicode = 0060; A unicode = 0041, за "вагою" буква а важче за букву А
const res11 = "b" < "c";
console.log(res11);

// == - приводить операнди к одному типу даних, потім порівнює. НЕ РЕКОМЕНДУЄТЬСЯ ВИКОРИСТОВУВАТЬ
const res12 = 5 == 6; // false
const res13 = 6 == 6; // true
const res2 = 5 == "5";
console.log(res2);

// === - порівнює операнди і за значенням, і за типом даних. РЕКОМЕНДУЄТЬСЯ
const res5 = 5 === "5"; // false
const res6 = 5 === 5; // true
console.log(res6);

// Більше-або дорівнює і менше-або дорівнює
3 >= 3; // true
3 >= 2; // true
5 <= 6; // true
4 <= 4; // true

// || - оператор АБО
// && - оператор І (and)

const res7 = 5 !== 5; // false тому що !== означає "не дорівнює"
console.log(res7);

// if - Оператор логічної умови
/* if (логічна операція, результатом якої буде тип даних Boolean) {
    блок коду, який виконується тільки тоді, коли логічна операція дорівнює true
} */

/*
// не виконається, тому що 4 не дорівнює 5 і логічная операція не є true
if (2 + 2 === 5) {
  console.log(true);
  // в if можна складати ще if
} 

// if-else
// else - інакше (в противному випадку)

/* if (логічна умова) {
    блок кода, який виконається, якщо умова дорівнює true
}
else {
    блок кода, який виконається, якщо умова кода дорівнює false
} */

/* if (2+2===8) {
    console.log(true);
} else {
    console.log(false);
}
*/

/* 
Завдання:
1. Створити змінні
a = 3;
b = 6;
n = 8;

2. Якщо b - парне, тоді n збільшити на 5, у іншому випадку a зробити = 15
3. Вивести змінні на консоль.
*/
/*
// Рішення
let a = 3;
let b = 6;
let n1 = 8;

if (b % 2 === 0) {
  n1 += 5; // n = n + 5
} else {
  a = 15;
}
console.log(a, b, n1);

/* 
Завдання:
1. Cтворити змінну r = 6.
2. Якщо r > 12 - вивести в консоль "більше 12", а якщо < 5 "менше за 5", в іншому випадку - вивести "в діапазоні між 5 і 12
*/
/*
// Рішення
let r = 6;
if (r > 12) {
  console.log("більше 12");
  if (r < 5) {
    console.log("в діапазоні між 5 і 12");
  }
}

/* 
Завдання:
1. Маємо змінну min = 20
2. 
Якщо min попадає в першу чверть години - вивести на консоль "перша чверть"
Якщо min попадає в другу чверть години - вивести на консоль "друга чверть"
Якщо min попадає в третю чверть години - вивести на консоль "третя чверть"
Якщо min попадає в четверу чверть години - вивести на консоль "четверта чверть" */

/*
// Рішення
let min = 20;
if (min >= 0 && min <= 15) {
  console.log("перша чверть");
} else if (min > 15 && min < 30) {
  console.log("друга чверть");
} else if (min > 30 && min < 45) {
  console.log("третя чверть");
} else if (min > 45 && min < 60) {
  console.log("четверта вчерть");
} else if (min < 0 || min > 60 || typeof min !== 'number') {
    console.log('произошла ошибка')
}


/*Завдання:
Потрібно визначити, чи цей рік є високосним.

Умови високосності року.
1. Якщо його номер кратний 4.
2. Не кратний 100 АБО Кратний 400.  
*/
/*
//Рішення
const year = 2022;
if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
console.log(year + ' є високосним');
} else (
    console.log('Ріе не є високосним')
)

/*Завдання:
  Козак Вус проводить змагання, в якому беруть участь n людей.
  Він вирішив нагородити їх усіх ручками та блокнотами.
  Відомо, що Вус має рівну кількість ручок і блокнотів.
  Визначте чи може Козак нагородити учасникіів, даючи кожному з них щонайменше по одній ручці та як мінімум одному блокноту.
*/
/*
//Рішення
let n = 45; // кол-во учасників
let m = 50; // кол-во ручек
let k = 50; // кол-во блокнотів
if (m >= n && k >= n) {
    console.log('зможе нагородити')
}
else {
    console.log('не зможе')
}
*/

/* Завдання
1. Створіть змінні a і b з довільними числами. Виведіть у консоль результат їхнього переменоження.
2. Створіть змінні c і d з довільними числами. Виведіть у консоль результат їхнього поділу.
3. Визначте змінні зі значеннями 33, false, 'javascript' та виведіть у консоль їхні типи даних.
4. Переробіть зазначений нижче код на скорочений формат, використовуючи формат:
+=, -=, *=, /=, ++, --


let num = 1;
num = num + 1;
num = num - 1;
num = num + 11;
num = num - 11;
num = num * 11;
num = num / 11
*/

/*
//Рішення
let a = 3;
let b = 5;
console.log(a*b);

let c = 9;
let d = 2;
console.log(c/d);

let e = 33;
console.log(typeof e);

let f = false;
console.log(typeof f);

let g = 'javascript';
console.log(typeof g);

let num = 1;
num /=11;
num --;
num ++;
num +=11;
num -=11;
num *=11;
*/

// alert('Hello');  вікно з повідомленням
/*
let a = Number(prompt('Введіть перше число')); // вікно з формою для вводу тексту
let b = Number(prompt('Введіть третє число'));
let result = a + b;

if(Number.isNaN(result)) {
  console.log('You are wrong, put number');
} else {
  console.log(result);
}
/* Об'явлення функції - Function declaraion
function ім'я_функції(argument1, argument2) {
  тіло функції
}
ім'я функціїї(аргумент1, аргумент2)
*/
/*
function greetingUser(userName) {
  console.log("hello, ", userName);
}

/* Використання фукції */
/*
greetingUser("Alex"); // аргумент фукнції
greetingUser("Queen");
greetingUser("Blue Sky");

/*Завдання
Створіть функцію, яка сприймає число, додає до нього 5 і виводить результат на консоль
 */
/*
//Рішення
function numberPlus5(number) {
  let result = Number(number) + 5;
  console.log(result);
}
numberPlus5(7);

/*Завдання
написати функцію, яка складає два числа і повертає результат розрахунку */
/*
//Рішення
function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}
let functionresult = addTwoNumbers(2, 5);
console.log(functionresult);
// Скороченне рішення
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
let functionresult2 = addTwoNumbers(2, 5);
console.log(functionresult2);

/* Функціональний вираз - Function expression
тут у function лежить адрес місця на компютері, де лежить функція
const ім'я_функції = function (argument1, argument2) {
тіло функції
}
ім'я функціїї(аргумент1, аргумент2)
*/
/*
const numberPlusNumber = function (num1, num2) {
  return num1 + num2;
};
let functionresult3 = numberPlusNumber(3, 2);
console.log(functionresult3);

/* Стрелочная функція - Arrow function
const ім'я_функції = (argument1, argument2) => {
  тіло функції
}
*/

/*
let num4 = Number(prompt('Put first number'))
let num5 = Number(prompt('Put second number'))

function addTwoNumbers1(arg1, arg2) {
  const result1 = arg1 + arg2;
  return result1;
}

let result1 = addTwoNumbers1(num4, num5);
console.log(result1);
*/
/*Scope - область видимости - то, что в фигурных скобках(всередені функції) это local scope, вне скобочек - global scope */

/*Завдання
1. Напишіть функцію, що повертає два числа і повертає те, що більше 
2. Напишіть функція, яка знаходить середнє арифметичне з двох чисел (одне число+друге число/на кількість чисел
3. Напишіть функцію, яка приймає одне число і визначає чи є воно парним*/

//Рішення 1
/*
function biggerNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
}
console.log(biggerNumber(3, 5));

//Рішення 2
function averageNumber(num3, num4) {
  let result3 = (num3 + num4) / 2;
  console.log(result3);
}
averageNumber(6, 6);

//Рішення 3
function pairNumber(num5) {
  if (num5 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(pairNumber(8));

/*Завдання
Вася працює програмістом і отримує 50 $ за кожні 100 рядків коду. За кожне третє запізнення Васю штрафують на 20$. Реалізувати меню:
- Користувач вводить бажаний дохід Васі та кількість запізнень. Порахувати скільки строк коду йому треба написати
- Користувач вводить кількість рядків коду, написану Васею та бажаний обсяг зарплати. Порахувати, скільки разів Вася може запізнитися
- користувач вводить кількість рядків коду та кількість запізнень. Визначити, скільки грошей заплатять Васі та чи заплатять взагалі.
 */

//Рішення
/*
const salary100 = 50;
const penalty = 20;
function howCountLines(expectedSalary, lateCount) {
  return (Math.floor(lateCount / 3) * penalty + expectedSalary) / salary100 * 100;
}
console.log(howCountLines(2000, 9));

function howLates(expectedSalary, rowsCount) {
  const result = Math.floor((rowsCount / 100 * salary100 - expectedSalary) / penalty * 3);
  if (result >0) {
    return result;
  } else {
    return 0;
  }
}
console.log(howLates(500, 5000));

function howMuchSalary(rowsCount, lateCount) {
  const result = rowsCount / 100 * salary100 - Math.floor(lateCount / 3) * penalty;
  if (result >0) {
    return result;
  } else {
    return 0;
  }
}
console.log(howMuchSalary(5000, 4));
*/

/* 
if (умова) {
  оператори...
  блок коду, який буде виконуватись якщо умова = true
} else {
  оператори...
  блок коду, який буде виконуватись якщо умова = false
}
*/

/* тернарний оператор

let result = умова ? операнд1(що буде виконуватись якщо умова = true) : операнд2(що буде виконуватись якщо умова = false)
*/

/* Завдання
Маркетплейс знаходиться у Шотладнії.
Серед товарів є алкоголь і тютюнові вироби.
Реалізувати обмеження: алко та тютюнові вироби продаються тільки повнолітнім.
*/

//Рішення
const age = 13;
let isAdult = age < 16 ? "not adult" : "adult";
console.log(isAdult);

/* Завдання
(Boolean змінна login - true/flase)
Створіть змінну viewMode, яка у випадку авторизованого користувача має містити рядок 'authMode',
а у випадку не авторизованого - 'unauth'
*/

//Рішення
let login = true;
let viewMode = login ? "authMode" : "unauth"; // виконається тому що перша умова буде працювати бо login = true
// let viewMode = login === true ? 'authMode' : 'unauth'; - розвернуте рішення
console.log(viewMode);

/* Завдання
Якщо число входить в діапазон від 6 до 12, то у змінній результат має містити рядок 'in',
в протилежному випадку рядок 'out'.
*/

//Рішення
let number = 5;
let inBetween = number >= 6 && number <= 12 ? "in" : "out";
console.log(inBetween);
/*
//Not Switch
const number1 = Number(prompt('Put number'));
if (number1 % 5 ===0) {
  console.log('ділиться на 5');
} else if (number1 % 3 ===0) {
  console.log('ділиться на 3');
} else if (number1 % 2 ===0) {
  console.log('ділиться на 2');
}


/* Switch case
синтаксис

switch(вираз - змінна) {
  case значення_виразу: робимо щось одне;
  break;
  case значення2_виразу: робимо щось інше;
  break;
  case значення3_виразу: робимо ще щось інше;
  break;
  default: робимо щось, якщо інші значення не підійшли;
}
*/

let monthNumber = 13;
switch (monthNumber) {
  case 1:
  case 2:
  case 12: {
    console.log("зима");
    break;
  }
  case 3:
  case 4:
  case 5: {
    console.log("весна");
    break;
  }
  case 6:
  case 7:
  case 8: {
    console.log("літо");
    break;
  }
  case 9:
  case 10:
  case 11: {
    console.log("осінь");
    break;
  }
  default: {
    console.log("Put number from 1 to 12");
    break;
  }
}

/*
Завдання 1:
prompt
виведіть користувачу пропозицію меню: 
1. Сік
2. Вода
3. Кава
4. Чай
5. Лимонад
Вивести в консоль те, що вибрав користувач
Зробити через switch-case

Задача 2:
Три prompt
1 промпт - перше число
2 промпт - друге число
3 промпт - дія, яку треба виконати над числами
Зробити калькулятор.
Користувач послідовно вводить одне за одним - перше число => друге число => один з варіантів (+ - * /)
Кожній дії зробити окрему функцію. Весь калькулятор - це теж функція, роль якої
спитати у користувача два числа і повернути йому результат у якості alert.
 */

//Рішення 1 завдання
/*
const userChoice = prompt('Choose drink: \n 1 - juice \n2 - water \n3 - coffee \n4 - tea \n5 - lemonade')
switch(userChoice) {
  case '1': {
    console.log('Juice');
    break;
  }
  case '2': {
    console.log('Water');
    break;
  }
  case '3': {
    console.log('Coffee');
    break;
  }
  case '4': {
    console.log('Tea');
    break;
  }
  case '5': {
    console.log('Lemonade');
    break;
  }
  default: {
    console.log('Choose from menu');
  }
}
*/
/*
//Рішення 2 завдання
function sum(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multy(a, b) {
  return a * b;
}
function devide(a, b) {
  return a / b;
}
function calculator() {
  const a = Number(prompt('Put first number:'));
  const b = Number(prompt('Put second number:'));
  const action = prompt('Put desired operation: + - * /');
  let result4;
  switch(action) {
    case '+' : {
      result4 = sum(a, b);
      break;
    }
    case '-' : {
      result4 = substract(a, b);
      break;
    }
    case '*' : {
      result4 = multy(a, b);
      break;
    }
    case '/' : {
      result4 = devide(a, b);
      break;
    }
    default: {
      result4 = 'Put correct action';
    }
  }
  console.log(result4);
}
calculator();
*/

/*
function sum(a, b) {
  return a + b;
}
function div(a, b) {
  return a / b;
}
function multy(a, b) {
  return a * b;
}
console.log(sum); 

const superFunction = sum;
sum(2, 2); // 4
superFunction(2, 4); // 6
*/
/* 
High order function (HOF) - функція вищого порядку - функція, яка приймає іншу функцію в якості аргумента
Callback - функція зворотнього виклику - функція, яку передали як аргумент іншій функції
*/
/*
function doingSomething(arg3, arg4, functio) { //HOF
let result6 = functio(arg3, arg4);
return result6;
}
console.log(doingSomething(2, 2, superFunction));
*/
// console.log(doingSomething(2, 2, function (a, b) {
//  return a * b; }) - анонімна функція

/*Детермінірована функція - функція, яка при одних і тих же аргументах ЗАВЖДИ повертає один і той же результат

function sum(a, b) {
  return a + b;
}
sum(2, 2); // 4
sum(2, 2); // 4
 */

/*НЕ детермінована функція - функція, яка при одних і тих же аргументах може повертати різний результат
let variable = 5;
function addToNumberSomeVariable(a) {
  return a + variable;
}
addToNumberSomeVariable(5); //10
variable = 20; 
addToNumberSomeVariable(5); //25
*/

/* Side effect - побочный эффект - коли ми просимо щось (браузер наприклад) щось зробити*/

console.log("Hello"); // просимо браузер записати щось у консоль лог
//alert(); // просимо браузер вивести віконце
//fetch(); //  запити на сервер або будь-які міжмережеві запити

/* 
Чиста функція - Pure function):
1. Детермінірована функція
2. Не має побічних ефектів - ефект, який виконується на стороні


//Цикли - Loops, завжди з перемінною let
//Зробити 10 консоль логів мануально
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
*/
//Зробити 10 консоль за допомогою лупів (циклів)
console.log(1);
// Loop "while" - виконується до тих пір поки умова = true

/*
while (умова) {
  код повторується, доки умова дорівнює true
}


let iterator = 0;
while(iterator < 10) {
  console.log(iterator); // виводити у консоль лог
  iterator++; //додавати одиницю
}
*/
/*Валідація значень */
// break - зупиняє цикл
//якщо не написати break - буде виконуватись бескінечно тому що у while вже значення true
while (true) {
  console.log("Wrong");
  break;
}

/*
Завдання:
зробити 10 повторів циклу і вивести на консоль парні значення лічільника
i - скорочення до iterator


 let i = 0;
 while(i < 10) {
  if(i % 2 ===0) {
    console.log(i);
  }
  i++;
 }
*/
/*Завдання
 Дан пароль - qwerty1234.
 Потрібно запитати у користувача через prompt пароль поки він не співпаде с тим, що лежить в змінній
 */

//Рішення
/*
 let password = 'qwerty1234';
 while(true) {
  let userPass = prompt('Put password');
  if(userPass === password) {
    console.log('Password is correct')
    break;
  }
 }
*/

//do while

/* do {
  тут блок коду, який буде повторювано виконуватись
 } while  (умова)
 

 let password1 = '1234';
 let promptPassword = null;
 do {
  promptPassword = prompt('Put password');
 } while (promptPassword !== password1);
*/
/*Цикл for

 for (початковий стан; умова, за якою цикл повторюється; зміна лічильника на кожній ітерації) {
  блок коду, який повторюється
 }
 

 for (let i = 0; i < 10; i++) {
  console.log(i);
 }
*/
/*Завдання
 Написати функцію, яка обчислює факторіал переданого числа, результат роботи функції вивести в консоль
 Факторіал - це
 5! = 1*2*3*4*5
 10! = 1*2*3*4*5*6*7*8*9*10
 

//Рішення
 function factorial(num) {
  if(num < 0) {
    return null;
  }
  if(num === 0 || num === 1) {
    return 1;
  }
let result = 1;
for(let s = 1; s <=num; s++) {
  result *= s; // result = result * s
}
return result;
 }
  console.log(factorial(5));
  */

// OBJECTS
/* 
 Об'єкти мають:
 - властивості
 - методи (те, що об'єкт вміє - записується функцією)
 */

//Синтаксис
let obj = {
  color: "red",
  fontSize: 2,
};

let bulb = {
  producer: "Philips", // властивість, поле
  brightness: 200, // властивість, поле
  power: "60W", // властивість, поле
  cap: "small", // властивість, поле
  on: function () {
    // метод
    return "The light is on!";
  },
};
console.log(bulb.brightness); // отримання інфи з об'єкта
console.log(bulb.on());


// створення об'єкта за допомогою функції-конструктора
const cat2 = Object(); 


// літеральне створення об'єкта
const cat = {
  name: "Murzik",
  color: "Red",
  breed: "Dvorovyi",
  age: 2,
  weight: 5,
  sex: 'm',
  eat: function() {
    return 'I am eating'
  },
  sleep: function() {
    return 'I am sleeping'
  }
}                             
cat.sleep = undefined;  // bad practice удаления

delete cat.sleep;       // good practice удаления

// Adding properties
cat.girlfriend = 'Murka'; 
//Adding object inside the object
cat.boyfriend = {
  color: 'Black',
  name: 'Tim',
  age: 4
};


/* 
Завдання
Визначте собаку, опишіть його властивості і декілька методів - бігти, спати, нявкати
*/

const dog = {
  name: 'Jack',
  age: 3,
  height: 0.5,
  weight: 4,
  run() {
    return 'I am runnning'
  },
  sleep() {
    return 'I am sleeping'
  },
  bark() {
    return 'I am barking'
  }
}


/* Функція-конструктор - потрібна щоб створювати багато однакових об'єктів
Технічно звичайна функція
Ім'я функції-конструктора починається з великої букви
*/
function Bat(name, color, breed, age) {
  this.name = name;  // this - посилання на саме ось цього новостворенного кота
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.run = function() {
    return this.name + ' is running';
  }
}

const bat1 = new Bat('Bublik', 'red', null, 2);          // new повинен бути обов'язково
const bat2 = new Bat('Murx', 'white', 'Siam', 4);
const bat3 = new Bat('Test');
console.log(bat1.run());

/* Завдання
Функція-конструктор кролика, в якого має бути ім'я, колір, вік
*/

//Рішення
function Rabbit(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}
const rabbit1 = new Rabbit('Frank', 'green', 4);
const rabbit2 = new Rabbit('Kate', 'violet', 2);
const rabbit3 = new Rabbit('Lui', 'lilic', 1);


/*Завдання
Функція-конструктор Country, яка приймає в якості аргументів:
- назва країни
- популяція
- площа
- плотність населення (density) = популяція цієї ж країни / площу цієї ж країни
Зробити декілька країн
*/


function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.getDensity = function() {
    return this.population / this.area;
  }
}

const countryAfrica = new Country('Africa', 4000, 200);
console.log(countryAfrica);


/*Завдання 1 
Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, повертає площу прямокутника.
*/
//Рішення

function multy(a, b) {
  return a * b;
}

function countArea(height, width, fun) {
  let resultt = fun(height, width);
  return resultt;
}
console.log(countArea(3, 4, multy));

/*Завдання 2
Написати функцію, яка приймає в якості аргумента діаметр кола
і повертає довжину кола.
L = π D = 2 π r
r- радіус кола
D- Діаметр кола
L- довжина кола
π - 3.14
*/
//Рішення

function countCircleLenght(diameter, Pi, fun) {
  let result7 = fun(diameter, Pi);
  return result7;
}
console.log(countCircleLenght(2, 3.14, multy));

/*Завдання 3
Написати функцію, яка приймає в якості аргумента висоту циліндра та радіус основи і повертає об'єм циліндра.
V = π × r2 × h, де π=3,14; r – радіус основи; h – висота циліндра
*/
//Рішення

function multy2(a, b, c) {
  return a * b * c;
}

function countCylinderVolume(Pi, radius, height, fun) {
  let result8 = fun(Pi, radius, height);
  return result8;
}
console.log(countCylinderVolume(3.14, 4, 4, multy2));

/*Завдання 4
Задача 2 (*)

Створити функцію-конструктор авто, яке має:
- назву
- максимальну швидкість
- поточну швидкість // в момент створення, поточна швидкість = 0
- метод прискорення (accelerate) - приймає в якості аргумента певне прискорення // прискорення не може бути більше за максимальну швидкість
- метод сповільнення (deaccelerate) - приймає в якості аргумента певне сповільнення // сповільнення не може бути менше за 0
- метод зупинки (stop)
*/

//Рішення
function Car(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;
  this.accelerate = function(accelValue) {
    this.speed = this.speed + accelValue;
    if(this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  }
}
  this.deaccelerate = function(deaccelValue) {
    rthis.speed = this.speed - deaccelValue;
  if(this.speed < 0) {
    this.speed = 0;
  }
  return this.speed;
}
  this.stop = function() {
    this.speed - 0;
    return this.speed;
}
const car1 = new Car('Jeep', 100);


//Шаблонные строки - Template literals

//alert('2+2=' + (2+2));
//let name = `Вася`;
//alert(`Привіт, ${name}`);
//alert(`2+2 =${2+2}`);

// запросить два числа и вывести результат плюсования (2+2=4)
//const one = Number(prompt('One number'));
//const two = Number(prompt('Two number'));
//alert(''+one+'+'+two+'='+(one+two));
//alert(`${one} + ${two} = ${one + two}`);

/* Задача 1
У нас є функція
function greetingUser(user) {
    // ?
}

та у нас є об'єкт
const user = {
    name: 'John',
    surname: 'Doe',
    age: 15
}

написати функцію таким чином, щоб вона привітала користувача та вказала,
скільки йому років має виповнитись у наступному році
*/

//Рішення
/*function greetingUser(user) {
  return `Hey ${user.name} ${user.surname}. You'll be ${user.age + 1} next year`;
}

const user = {
  name: 'John',
  surname: 'Doe',
  age: 15
}
console.log(greetingUser(user));
*/

// Менять объект по ссылке
/*
function greetingUser(user) {
  user.age = 20;
  return `Hey ${user.name} ${user.surname}. You'll be ${user.age + 1} next year`;
}

const user = {
  name: 'John',
  surname: 'Doe',
  age: 15
}
console.log(greetingUser(user));
*/

// Обчислювані властивості
// Ключ в об'єкті може бути рядок або тип даних Symbol
const user = {
  'name': 'John', // Ключ 'name', значення 'John'
  'favourite color': 'red',
  0: 'value'
}
//user.name //John
// . - оператор доступу за ім'ям властивості
// user.'favourite color' // syntax error из-за пробела
// user.0 // syntax error

// [] - оператор доступу до обчислювальної властивості (Computed property)
let name = 'Sam';
user[name];  // === user.Sam
user['favourite color'];  // red
user[0]; // 'value'


let key = 'a';
const obj1 = {
  a: 5
}
obj1.key  // undefined
obj1[key];  // 5

const someObj = {
  2: 10
}

someObj[2]  // 10
someObj['2'];  // 10


/* Завдання
вивести користувачу привітання, залежно від значення яке він ввів
*/

//Рішення
const greets = {
  15: 'Hi',
  17: 'Whats up',
  18: 'Hello',
  30: 'Good morning'
}
console.log(greets[30]); 


const todo = {
  Mon: 'drive lesson',
  Tue: 'dentist visit',
  Wed: 'Go to party',
  Thu: 'Chill',
  Fri: 'Hard work',
  Sat: 'Go to park'
}

/*проверить есть ли ключ в объекте 'key' in object */

console.log('Mon' in todo);


const todo2 = {
  key1: undefined
}
let key1 = 'val';
console.log(key1 in todo2);  // 'val' in todo2
console.log('key1' in todo2);  //key1 in todo2

function greeting(user) {
  return `Hello, ${'name' in user ? user.name : 'Anonym'}`;
}
const user9 = {
  name: 'Vasya'
}

const user2 = {

}
console.log(greeting(user9));  // Hello, Vasya
console.log(greeting(user2));  // Hello, Anonym




//Цикл for ... in  НЕ for(;;)
const user8 = {
  name: 'John',
  surname: 'Doe',
  age: 20,
  'favourite color': 'red',
  movie: 'Blue moon',
  avatar: 'http://....'
}
for (let key in user8) {
  console.log(`${key} ---- ${user[key]}`);  // key ---- value
}


//Масиви Array
//Slice method in array - копіює масив з індекса М(включно) до індекса N(не включаючи)
const array = [1, 2, 3, 4, 5];
console.log(array.slice(2, 4));  // 3, 4
console.log(array.slice(2)); // 3, 4, 5

const users = [
  {
    name: 'John',
    lastName: 'Doe'
  },
  {
    name: 'Jane',
    lastName: 'Doe'
  },
  {
    name: 'Jack',
    lastName: 'Dosh'
  },
]

//Мутація даних, примитивные виды данных не мутируют (имутабельный)

const user1 = {
  name: 'Jack Freck'
}
user1.isBroken = false;

//Reverse method in array - мутабельный, может мутировать

//Splice method in array -мутабельный метод, изменяет содержимое начального массива, удаляя и/или добавляя элементы
// splice(M, L, )
const arr = [1, 2, 3, 4, 5];
//console.log(arr.splice(2, 1));  // 2 - индекс, который вырезаем, 1 - количество индекс, которые вырезаем
//console.log(arr);
console.log(arr.splice(1, 0, 'Hello'));// 1-индекс после которого добавляем, 0-число удаляемых индексов, Hello - то что добавляем
console.log(arr);

/* Завдання
1. з масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5]
2. з масиву [1, 2, 3, 4] зробити масив [2, 3, 4]
3. з масиву [1, 2, 3, 4, 5] зробити масив [1,'w', 're-td', 2, 3, 4, 'vv', 5, 'aa']
*/

//Рішення
//1
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.splice(1, 2));

//2
const arr2 = [1, 2, 3, 4];
const newArray = arr2.slice(1);

//3
const arr3 = [1, 2, 3, 4, 5]; // інше рішення arr3.splice[1, 4, 'w', 're-td', 2, 3, 4, 'vv', 5, 'aa']
arr3.splice(1, 0, 'w', 're-td');
arr3.splice(6, 0, 'vv');
arr3.push('aa');

/* Завдання 
Напишіть функцію, яка перевіряє чи є в масиві два однакових елементи.
Масив ми приймаємо як аргумент функції, функція повертає true, якщо є два однакових елементи поспіль,
false якщо таких не має.
[1, 2, 3, 4, 5] - false
[1, 2, 2, 3, 4, 5] - true
*/
/*function ім'я_функції(argument1, argument2) {
  тіло функції
}
ім'я функціїї(аргумент1, аргумент2)


//Рішення - в цьому випадку перевіриться тільки наявність 2, 2, але якщо треба перевірити інші
два однакових елементи поспіль - вона не спрацює


function checkTwoSimilarNumbers (arr4) {
  if (arr4.includes(2, 2)) {
    console.log('true');
  } else {
    console.log('false');
  }
}
checkTwoSimilarNumbers(arr4 = [1, 2, 2, 3, 4, 5]);
*/

//Рішення - в цьому випадку перевіряться будь-які два однакових елементи поспіль
/*
function checkTwoSimilarNumbers (array) {
for(let i = 0; i < array.length - 1; i++) {
  if(array[i] === array[i + 1]) {
    return true;
  }
}
return false;
}
checkTwoSimilarNumbers(array = [1, 2, 2, 3, 4, 5]);
*/


function saySomething(howToSay, whatToSay) {
  howToSay(whatToSay);
}

//saySomething(alert, 'Hello, user!');
saySomething(console.log, 'Hi!');
//saySomething - HOF(High Order Function - функція вищого порядка)
//alert та console.log - callback


//forEach method in array - виконує щось для кожного елементу у масиві, не создавая новый массив
/*
function square(a) {              //функція що возводить у квадрат
  console.log(a**2);
}
*/
const array1 = [1, 2, 3, 4, 5];
//array1.forEach(square);
array.forEach((item) => {       //item - текущий просматриваемый элемент в массиве(сначала это 1, потом 2 и т.д.)
console.log(item**2);
})



//Map method in array - тот же forEach, только он создает новый массив
/*
function square1(a2) {
  return a2*a2;
}
*/
const array6 = [1, 2, 3, 4, 5];
// console.log(array6.map(square1));

const newArray1 = array6.map((item) => {
return item**2;
})


/*
Завдання
Дан масив об'єктів
const users0 = [
  {
    name: 'John',
    lastName: 'Doe',
    age: 18,
    email: 'mail@com'
  },
  {
    name: 'Jane',
    lastName: 'Doe',
    age: 20,
    email: 'mail@com'
  },
  {
    name: 'Josh',
    lastName: 'Doe',
    age: 17,
    email: 'mail@com'
  },
  {
    name: 'Jake',
    lastName: 'Doe',
    age: 21,
    email: 'mail@com'
  },
  {
    name: 'Jackson',
    lastName: 'Doe',
    age: 17,
    email: 'mail@com'
  },
]

потрібно всім користувачам додати поле isSubscribers = false
*/

//Рішення
const users0 = [
  {
    name: 'John',
    lastName: 'Doe',
    age: 18,
    email: 'mail@com'
  },
  {
    name: 'Jane',
    lastName: 'Doe',
    age: 20,
    email: 'mail@com'
  },
  {
    name: 'Josh',
    lastName: 'Doe',
    age: 17,
    email: 'mail@com'
  },
  {
    name: 'Jake',
    lastName: 'Doe',
    age: 21,
    email: 'mail@com'
  },
  {
    name: 'Jackson',
    lastName: 'Doe',
    age: 17,
    email: 'mail@com'
  },
]
/* variant 1
function addSubscribeField(item) {
  item.isSubscribed = false;
}

users0.forEach(addSubscribeField);
*/

// variant 2
users0.forEach((item) => {
item.isSubscribed = false;
})


/*Завдання
Дан масив const arr = [2, 44, 11, 234, 8, 2, 4, 1]

Зробити новий масив, всі елементи якого = елемент зі старого масиву + 100
*/

const arr4 = [2, 44, 11, 234, 8, 2, 4, 1];
const plus100 = arr4.map((item) => {
  return item + 100;
})