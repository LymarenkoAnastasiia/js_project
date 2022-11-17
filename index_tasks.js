/*Завдання

Дан масив [3, 6, 8, 2, 3, 5, 1];
Написати функцію, яка приймає масив в якості аргументу і повертає суму всіх елементів масиву
Наприклад: [1, 2, 3] // sum: 1+2+3=6
*/

const array1 = [3, 6, 8, 2, 3, 5, 1];
function sumArray(array) {
    let sum = 0;
for(let i = 0; i < array.length; i++) {
    if(typeof array1[i] === 'number') {
    sum = sum + array1[i];
}}
return sum;
}
console.log(sumArray(array1));


/*Завдання

Дан масив [3, 6, 8, 2, 3, 5, 1]
Написати функцію, яка знаходить найбільше значення серед елементів масива
1. Десь запам'ятати найбільше число, яке ми зустріли
2. Порівняти його з наступним елементом масиву.
Якщо елемент масиву опиниться більшим ніж те число, яке ми запам'ятали, то саме цей елемент масиву стає найбільшим запам'ятованим

let num = 5;
let num2 = 4;
if(num > num2) {
    //ідемо далі
} else {
    num = num2
}
*/
const array2 = [3, 6, 8, 2, 3, 5, 1];
function biggerNumber(arrayMax) {
    let max = arrayMax[0];

    for(let i = 0; i < array2.length; i++) {
    if(arrayMax[i] > max) {
        max = arrayMax[i];
    } 
    }
return max;
}

console.log(biggerNumber(array2));


/*Завдання

Написати функцію, яка знаходить середнє арифметичне всіх елементів масиву.
[3, 6, 8, 2, 3, 5, 1] // 4
*/
const array3 = [3, 6, 8, 2, 3, 5, 1];

function average(arrayAverage) {
let sum = 0;
for(let i = 0; i < array3.length; i++) {
    if(typeof array3[i] === 'number') {
        sum += array3[i]
}
}
return sum / array3.length;
}
console.log(average(array3));

/*Завдання
1. Дано два масиви 
[1, 2, 3] and [4, 5, 6]
Об'єднайте їх у масив [1, 2, 3 ,4 ,5, 6]
2. Даний масив [1, 2, 3] зробить з нього [3, 2, 1]
3. Додати до масиву [1, 2, 3] в кінець елементи 4, 8, 10
4. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть у консоль останній елемент та видаліть його з масива
5. Даний масив ['3', 7, 10]. Додайте йому на початок елементи 2, 8
*/

//1
const array4 = [1, 2, 3];
const array5 = [4, 5, 6];
console.log(array4.concat(array5));

//2
const array6 = [1, 2, 3];
console.log(array6.reverse());

//3
const array7 = [1, 2, 3];
array7.push(4, 8, 10);

//4
const array8 = ['aaa', 'bbb', 'ccc'];
console.log(array8.pop());

//5
const array9 = ['3', 7, 10];
array9.unshift(2, 8);



  /*Завдання

  Дан масив const arr = [2, 44, 11, 234, 8, 2, 4, 1]
  
  Зробити новий масив, всі елементи якого = елемент зі старого масиву + 100
  */
  
  const arr4 = [2, 44, 11, 234, 8, 2, 4, 1];
  const plus100 = arr4.map((item) => {
    return item + 100;
  })



/*Завдання

Прийняти від користувача (через промпт) назву дня тижня і видати в алерт що заплановано у користувача у цей день.
Об'єкт з планами виглядає так:
*/

const objTask = {
    Mon: 'driver lesson',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'chill',
    Fri: 'hard work',
    Sat: 'go to park'
}
//let userValue = prompt('Insert the day.');
//alert(objTask[userValue] ? objTask[userValue] : 'Nothing planned');



/*Завдання

Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів
(for .. in)
*/
const departmentSalary = {
    HR: 20000,
    Development: 30000,
    Drive: 200,
    Clining: null,
    Marketing: 'not salary'
}

function sumSalary(salaryObj) {
    let result = 0;
    for(let key in salaryObj) {
        if(typeof salaryObj[key] === 'number') {
        result = result + salaryObj[key];
    }
    }
    return result;
}
console.log(sumSalary(departmentSalary));



/*Завдання

Написати функцію, яка приймає об'єкт і виводить всі значення всіх властивостей, оформлені у *....*
const obj = {
    key1: value2
}

// "key1": *value2*

(for ... in)
*/

function stylingConsole(objTask) {
    for (let key in objTask) {
        console.log(`"${key}": *${objTask[key]}*`);
    }
}
stylingConsole(objTask);



/*Завдання

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
const users = [
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
  
  users.forEach(addSubscribeField);
  */
  
  // variant 2
  users.forEach((item) => {
  item.isSubscribed = false;
  })



  /*Завдання

  На основі масиву об'єктів з попередньої задачі створити новий масив користувачів,
  об'єкти мають бути у такому вигляді:
{
    fullName: 'John Doe',
    age: ....,
    email: ...
}

Тобто потрібно якось перетворити два поля name та lastName у одне поле - fullName
  */
  
  function newUserObject(user) {
    return {
        fullName: `${user.name} ${user.lastName}`,
        age: user.age,
        email: user.email
    }
  }

  const newUserArray = users.map(newUserObject);



  /*Завдання
  Дано подвійний масив чисел:
const number = [[1,2,3],[4,5,6],[7,8,9]];

Завдання.
Мова про вкладені у масив цикли.
Якщо у парному масиві число стоїть на парному індексі – замінити елемент масиву рядком 'pp'.
Якщо у парному масиві число стоїть на непарному індексі – замінити елемент масиву рядком – 'pn'.
Якщо у непарному масиві число стоїть на парному індексі – замінити елемент масиву рядком – 'np'.
Якщо у непарному масиві число стоїть на непарному індексі – замінити елемент масиву рядком – 'nn'.

парний масив, парне число – 'pp'. 
непарний масив, парне число - 'np'. 
  */

const number = [[1,2,3],[4,5,6],[7,8,9]];

function testArray(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(i % 2 === 0 && j % 2 === 0) {
                array[i][j] = 'pp';
            }
            if(i % 2 === 0 && j % 2 !== 0) {
                array[i][j] = 'pn';
            }
            if(i % 2 !== 0 && j % 2 === 0) {
                array[i][j] = 'np';
            }
            if(i % 2 !== 0 && j % 2 !== 0) {
                array[i][j] = 'nn';
            }
        }
    }
    return array;
}

console.log(testArray(number));


/*Завдання
Написати функцію, яка робить кожне слово у переданому рядкку з великої літери
*/

function eachWordInUpper(str) {
    const wordArray = str.split(' ');
    const resultWordArray = [];

    for(let i = 0; i < wordArray.length; i++) {
         let word = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
         resultWordArray.push(word);
    }
    return resultWordArray.join(' ');
}

console.log(eachWordInUpper('hello to you'));



/*Завдання
Написати функцію truncate, яка приймає в якості аргументів рядок (str1) і довжину (str1.length).
Якщо довжина > str1.length, то урізати рядок до цієї довжини і в кінці додати "...".
Якщо рядок менший, нічого робити не треба.
truncate('Hello', 2); // He...
truncate('hello', 10); // hello 
*/


function truncate(str1, strLength) {
    if(str1.length <= strLength) {
        return str1;
    } 
      const newStr = str1.slice(0, strLength);
      return newStr + '...';
    }


console.log(truncate('Hello', 2));


/*Завдання
Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra', інакше false.
checkSpam('buy viagra now'); //true
checkSpam('free xxxxx'); //true
checkSpam('innocent rabbit'); //false
*/

function checkSpam(string) {
    if(string.includes('xxx') || string.includes('viagra')) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam('innocent rabbit'));


/*Завдання
Написати функцію яка перевіряє, чи є переданий рядок паліндромом.
Не зважаючи на регістр.
Паліндром - це коли рядок з обох боків читається однаково.

Anna - паліндром
Papa - не паліднром
Namman - паліндром
*/

//Рішення
//Длінніший варіант

// function palindromCheck(stringPali) {
//     let paliArray = stringPali.split('');
//     console.log(paliArray);
//     let paliArrayReverse = paliArray.reverse();
//     console.log(paliArrayReverse);
//     let arrayToString = paliArrayReverse.join('');
//     console.log(arrayToString);
//     if(arrayToString === stringPali) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(palindromCheck('Anna'.toLowerCase()));

//Коротший варіант
function palindromCheck(stringPali) {
    let paliArray = stringPali.split('').reverse().join('');
    console.log(paliArray);
    if(paliArray === stringPali) {
        return true;
    } else {
        return false;
    }
}
console.log(palindromCheck('Anna'.toLowerCase()));



/*Завдання
Написати функцію, яка приймає рядок і повертає кількість голосних літер, що містяться в рядку.
(мова про латинську абетку)

Голосні: ['a', 'e', 'i', 'o', 'u'];
*/

//Рішення
function countVowels(string) {
    const array10 = string.toLowerCase().split('');
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    const resultArray = array10.filter((letter) => vowelsArray.includes(letter));
    return resultArray.length;
}
console.log(countVowels('innocent'));


/*Завдання
Знайти факторіал числа
5! = 1*2*3*4*5 = (1*2*3*) * 5
*/

//Рішення
function factorial(num) {
    if(num < 0) {
        return null;
    }
    if(num === 0 || num === 1) {
        return 1;
    } else {
     return num * factorial(num -1);
}
}
console.log(factorial(5))



/*Завдання
Зробити функцію і відловити помилку
 */
function divide(a, b) {
    if(a < 0 || b < 0) {
        const error = RangeError('Number is below 0');
        throw error;
    }
    if(typeof a !== 'number' || typeof b !== ' number') {
        throw new TypeError('a i b have to be numbers')
    }
    return a / b;
}
try {
    divide(2, -2)
} catch(error) {
    console.log(error);
}


/*Завдання
Написати клас Worker.
У працівника є ім'я, призвище, ставку за робочий день, кількість відпрацьованих днів у цьому місяці.
Написати метод, який повертає зарплатню працівника за поточний місяць
*/
const MIN_SALARY = 6700;
const WORK_DAYS = 21;
const MIN_RATE = MIN_SALARY / WORK_DAYS;

class Worker {
    constructor(name, lastName, salaryForDay = MIN_RATE, DaysWorked= WORK_DAYS) {
        this.name = name;
        this.lastName = lastName;
        this.salaryForDay = salaryForDay;
        this.DaysWorked = DaysWorked;
    }
    countMonthSalary() {
        return this.salaryForDay * this.DaysWorked
    }
}
const newWorker = new Worker('Nick', 'Pott', 20, 4);
const newWorker2 = new Worker('Lia', 'Pugh');


/*Завдання
Класс Car
Класс Fuel
Порахувати загальну вагу автомобіля
*/

class Fuel {
    constructor(volume, density) {
        this.volume = volume; // об'єм
        this.density = density; //щільність
    }
    getFuelWeight() {
        return this.volume * this.density;
    }
}
const benzin = new Fuel(50, 0.9);
const diesel = new Fuel(40, 2);
const AVERAGE_PASSENGER_WEIGHT = 80;

class Car {
    constructor(name, weight, fuel, numberOfPassengers) {
        this.name = name;
        this.weight = weight;
        this.fuel = fuel;
        this.numberOfPassengers = numberOfPassengers;
    }
    //написати метод, що порахує вагу авто на основі його власної ваги + ваги палива + вага пасажирів
    getCarWeight() {
        return this.fuel.getFuelWeight() + this.weight + this.numberOfPassengers * AVERAGE_PASSENGER_WEIGHT;
    }
}
const newCar1 = new Car('Toyota', 2000, benzin, 2);
const newCar2 = new Car('Lexus', 2000, diesel, 3);



/*Завдання
Клас Friend
У об'єкта є ім'я і кількість грошей, і друг.
У вас є якась сума грошей і у вашого друга також.
Порахувати спільну кількість грошей
*/


class Friend {
    constructor(name, amount, friend) {
        this.name = name;
        this.amount = amount;
        this.friend = friend;
    }
    getFullAmount() {
        if(this.friend === null) {
            return this.amount;
        }
        if(Array.isArray(this.friend)) {
            return this.amount + this.friend.reduce((sum, friend) => sum + friend.getFullAmount(), 0);
        }
        return this.amount + this.friend.getFullAmount();
    }
}

const friend2 = new Friend('Ihor', 5, null);
const friend3 = new Friend('Alex', 15, null);
const myFriend = new Friend('Vlad', 20, [friend2, friend3]);
const me = new Friend('Roman', 10, myFriend);  // myFriend => [friend1, friend2]



/* Завдання
Написати клас RangeValidator
дві властивості:
from, to
from не може бути більше to
1. реалізувати сеттери для обох властивостей.
2. реалізувати getRange, що повертає масив цілих чисел цього діапазону
*/

class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    set from(value) {
        if(typeof value !== "number") {
            throw new TypeError('From must be a number');
        }
        if(value > this._to) {
            throw new RangeError('To must be bigger that from');
        }
        this._from = value;
    }
    set to(value) {
        if(typeof value !== 'number') {
            throw new TypeError('To must be a number');
        }
        this._to = value;
    }
    get to() {
        return this._to;
    }
    get from() {
        return this._from;
    }
    get getRange() {
        const arr = [];
        for(let i = this._from; i <= this._to; i++) {
            arr.push(i);
        }
        return arr;
    }
    validate(num) {
        return this.getRange.includes(num);
    } 
}


/*Завдання
Є ферма.
На фермі в нас є свійські тварини (корови, кози).
Є домашні тварини (кошки і собаки).

В кожної тварини є діти. В кожного з дітей може бути певна кількість дітей.

Реалізувати класи всіх тварин і додати тваринам певну кількість дітей 
(кількість дітей вказуєте у конструкторі під час стоврення єкземпляру об'єкту).

Просунутий рівень (задача *****):
Реалізувати функцію, яка підрахує кількість тварин на фермі.
*/

//Рішення
class Animals {
    constructor() {
        this.childs = null;
    }
}

class Cat extends Animals {
    constructor() {
        super();
    }
}

class Dog extends Animals {
    constructor() {
        super();
    }
}

class Cow extends Animals {
    constructor() {
        super();
    }
}

class Goat extends Animals {
    constructor() {
        super();
    }
}

/**
 * Функція створення ферми
 * @param {Animal(for Cat, Dog, Cow, Goat)} Type 
 * @param {number} quantity 
  */

function createFamily(Type, quantity) {
    const animals = new Array(quantity).fill(new Type());
    animals.forEach(animal => {
        const childs = new Array(quantity).fill(new Type());
        animal.childs = childs;
    })
    return animals;
}

/**
 * Функція підрахунку кількості дітей
 * @param {Array of Animals} farm 
 */

function countFarm(farm) {
    return farm.reduce((accum, item) => {
        if(item.childs) {
            return accum + 1 + item.childs.length;
        }
    }, 0)
}

const farm = [...createFamily(Cat, 3), ...createFamily(Dog, 2), ...createFamily(Cow, 5), ...createFamily(Goat, 1)];


/*Завдання
переписати MyArray у класи

function MyArray() { // функція-конструктор масивів
    this.length = 0;
}

function myProtoArray() {
    this.push = function() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    },
    this.pop = function() {
        if(this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        }
    }
}

MyArray.prototype = new myProtoArray;


const arr = new MyArray();
*/

//Рішення
class MyArray {
    constructor() {
        this.length = 0;
    }

    static isMyArray(obj) {
        return obj instanceof MyArray;
    }
    
    push() {
        for(let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }
    pop() {
        if(this.length > 0) {
            let lastItem = this[this.length - 1];
            delete this[this.length - 1];
            this.length--;
            return lastItem;
        }
    }
    forEach(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
    map(callback) {
        const newArr = new MyArray();
        for(let i = 0; i < this.length; i++) {
            newArr.push(callback(this[i], i, this));
    }
    return newArr;
}
unshift(...value) {
    const temp = new MyArray();
    temp.push(...value);  // 1 - пушим во временный то, что передали в unshift
    this.length += temp.length;
    for(let i = 0; i < value.length - 1; i++) {
        temp.push(this[i]); // 2 - пушим во временный то, что и так до этого находилось в основном массиве
    }
    for(let i = 0; i < this,this.length; i++) {
        this[i] = temp[i]; // 3 - перезаписываем текущий массив
    }
    return this.length;
}
}


class Stack {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
    }
    get isEmpty() {
        return this.size === 0;
    }
    get size() {
        return this._size;
    }
    get maxSize() {
        return this._maxSize;
    }
    set size(value) {
        throw new Error('Access denied');
    }
    set maxSize(value) {
        throw new Error('Access denied');
    }
    push(value) {
        if(this.size >= this.maxSize) {
            throw new Error('Stack overflow');
        }
        this[`_${this.size}`] = value;
        this._size++;
        return this.size;
    }
    pop() {
        if(this.size > 0) {
            const lastItem = this[`_${this.size}`];
            delete this[`_${this.size - 1}`];
            this._size--;
            return lastItem;
        }
    }
    pick() {
        return this[`_${this.size - 1}`];
    }
}


/*Завдання
(2+2) + [2 * (2/4)]
() [({})]   //true
(2+2) + [2*(-1]+5] //false
написати функцію, яка приймає рядок, що містить дужки і повертає true, якщо дужди правильно парно відкриваються
і закриваються, false - якщо порядок порушений
Дужки можуть бути такі: (), [], {}, <>
Декомпозиція:
1. Створюємо структуру, де будемо зберігати ось ці всі дужки.
2. Перебираємо рядок.
3. Якщо ми зустріли дужку, яка відкривається, покласти її в стек.
4. Якщо ми зустріли дужку, що закривається, проаналізувати її:
    - порівняти, чи є оця закриваюча дужка парною до останнього елементу стеку
    - якщо так, то видалити відкриваючу зі стеку
    - якщо ні, то повертаємо помилку
5. Проаналізувати, чи залишилось щось у стеку. Якщо рядок закінчився (після перебору), а в стеку щось залишилося
то порядок був неправильний. Якщо стек пустий, то все нормально (порядок був правильний)

Ілюстрація: https://site.ada.edu.az/~medv/acm/Docs%20e-olimp/Volume%2054/5327_files/image002.gif

На базовому рівні ваша функція має працювати тільки з дужками.
Додатково (**): ігнорувати всі символи, крім дужок (щоб можна було крім дужок передавати ще щось, наприклад, числа)


Може стати у нагоді при вирішенні:
Object.values
Object.keys
*/

//Рішення

/**
 * 
 * @param {string} str  - рядок, який аналізується
 * @param {Object} options - об'єкт налаштувань всередені якого ми очікуємо об'єкт braces
 * @param {Object} options.braces - об'єкт з параметрами символів, які перевіряються
 */
function checkSequence(str, options) {
    const stack = new Stack();
    const braces = options.braces;
    const arr = [...Object.keys(braces), ...Object.values(braces)];
    const newStr = str.split(['']).filter((sym) => arr.includes(sym))
    //const closeBraces = Object.values(braces);
    for(const symbol of str) {
        if(braces[symbol]) { //тоді це відкриваюча дужка
            stack.push(symbol);
            continue;
        }
        if(stack.isEmpty && closeBraces.includes(symbol)) {
            return false;
        }
        const lasItemFromStack = stack.pick();
        const correctCloseBrace = braces[lasItemFromStack];
        if(correctCloseBrace === symbol) {  //тоді це закриваюча дужка
            stack.pop();
        }
    }
    return stack.isEmpty;
}

const options = {
    braces: {
        '(': ')',
        '[': ']',
        '{': '}',
        '<': '>',
    }
}

console.log(
    checkSequence('(2+2)[3-1]2(*3[9/1])', options)
);


/*Завдання
const user = {
    name: 'Alex',
    lastName: 'Doe',
    id: 1
}
const user2 = {
    name: 'John',
    lastName: 'Doe',
    id: 2
}
const johnMessages = ['hello', 'how are you?'];
const alexMessages = ['hi!', 'Im fine'];

Зв'язати користувача і його повідомлення щоб за юзером знайти його повідомлення
*/
const user = {
    name: 'Alex',
    lastName: 'Doe',
    id: 1
}
const user2 = {
    name: 'John',
    lastName: 'Doe',
    id: 2
}
const johnMessages = ['hello', 'how are you?'];
const alexMessages = ['hi!', 'Im fine'];

const messageMap = new Map();
messageMap.set(user.id, alexMessages);
messageMap.set(user2.id, johnMessages);

function createMessage(userID, newMessage, messageMap) {
    const userMessages = messageMap.get(userID);
    userMessages.push(newMessage);
}