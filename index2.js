
function t() {
  console.log(arguments);
  console.log(arguments.length);
}
console.log(t);
console.dir(t); // консолить об'єкт з його властивостями та методами

t(1, 2, 3, 4, 5);

//Array.from() - создает новый массив из массивоподобного (псевдомассив) объекта

function sum(a, b) {
  const arrayArgs = Array.from(arguments);
  console.log(arrayArgs);
  return a + b;
}
console.log(sum(2, 6, 23, 65, 123, 3432));

/*Завдання 
Напишіть функцію, яка повертає сумму будь-якої кількості переданої їй аргументів
sum(2,3) // 5
sum(4,7,2,1) // 14
*/

function sum1() {
  const arrayArgs1 = Array.from(arguments); //нормальний масив з об'єкту arguments
  let sum1 = 0;
  for (let i = 0; i < arrayArgs1.length; i++) {
    sum1 += arrayArgs1[i];
  }
  return sum1;
}
console.log(sum1(1, 2, 3, 4, 5, 6));
console.log(sum1(1, 2, 3));

//Chaining функцій

/*Задача 
новий масив, кожен елемент якого = елемент зі старого масиву *2
*/

const array = [2, 3, 4, 5, 1, 2];
const newArray = array
  .map((item) => {
    return item * 2;
  })
  .reverse()
  .join(","); // chaining
console.log(newArray);

/////////
const ledder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    //поточний крок
    alert(this.step);
  },
};
/*
ledder.up();
ledder.up();
ledder.down();
ledder.showStep();  // 1
ledder.down();
ledder.showStep(); // 0
*/
//сокращенній варіант
//ledder.up().up().down().showStep();

//Sort method in array - массив сортируется на месте (мутирующий алгоритм)

const array2 = [5, 3, 9, 21, 5, 1, 2, 4];
array2.sort();
console.log(array2); // [1, 2, 21, 3, 4, 5, 5, 9] - отсортировал по первой цифре числа

const arrayWords = ["bbb", "abb", "aaa", "aba"];
arrayWords.sort();
console.log(arrayWords); // ['aaa', 'aba', 'abb', 'bbb'] - отсортировал по "весу" букв с таблици Unicode

// compareFunction
/* 
returning:
-1 -спочатку a, потім b
0 -елементи залишаються незмінними
1 -спочатку b, потім а
a, b - два сусідні елементи
*/
const array3 = [5, 3, 9, 21, 5, 1, 2, 4];
function compareFunction(a, b) {
  if (b > a) {
    return -1;
  } else {
    return 1;
  }
}
array3.sort(compareFunction);
console.log(array3);

/*Завдання 
написати функція компоратор, яка відсортує масив у зворотньому порядку
*/

//Рішення
const array4 = [1, 2, 3, 4, 5, 6];
function compareFunction1(a, b) {
  if (b < a) {
    return -1;
  } else {
    return 1;
  }
}
array4.sort(compareFunction1);
console.log(array4);

// Filter method in array  - создает новый массив с теми элементами, которые прошли проферку (фильтрацию)

const array1 = [5, 3, 9, 21, -5, 1, -2, 4];
//створити новий масив, в який попадуть тільки ті елементи зі старого масиву, які більше ніж 0

/* longer option

function filterFunction(item) {
    if(item > 0) {
        return true;
    } else {
        return false;
    }
}

*/

//shorter option

function filterFunction(item) {
  return item > 0;
}
/* 
функція приймає один аргумент - кожен елемент початкового масиву (item)
функція повертає true якщо елемент підходить (пройшов фільтрацію) і додає його у новий масив
функція повертає false якщо елемент НЕ підходить (НЕ пройшов фільтрацію) і НЕ додає його у новий масив
*/
const filteredArray = array1.filter(filterFunction);

/*Завдання
Створити новий масив, в який увійдуть тільки парні елементи початкового масиву
*/

//Рішення
const pairArray = [1, 2, 3, 4, 5, 6, 7, 8];
function filterPairArray(item) {
  return item % 2 === 0;
}
const filteredPairArray = pairArray.filter(filterPairArray);

//Reduce method in array - зводить якусь кількість елементів до одного результуючого значення

const arrayReducer = [2, 3, 1, 2, 34, 21];
function reducer(accumulator, item) {
  return accumulator + item;
}
const sum0 = arrayReducer.reduce(reducer, 0);

const catArray = [
  {
    name: "Murzik",
    color: "black",
    weight: 3,
    age: 2,
  },
  {
    name: "Murka",
    color: "grey",
    weight: 5,
    age: 3,
  },
  {
    name: "Barsik",
    color: "red",
    weight: 2,
    age: 1,
  },
  {
    name: "Cookie",
    color: "blue",
    weight: 4,
    age: 6,
  },
  {
    name: "Stus",
    color: "green",
    weight: 1,
    age: 5,
  },
  {
    name: "Fagot",
    color: "violet",
    weight: 2,
    age: 3,
  },
  {
    name: "Kit",
    color: "pink",
    weight: 7,
    age: 9,
  },
];

/*
Завдання
1. Відсортувати котів за вагою на збільшення
returning:
-1 -> спочатку cat1, потім cat2
0 -> всі на місці
1 -> спочатку cat2, потім cat1
*/

catArray.sort((cat1, cat2) => {
  if (cat1.weight < cat2.weight) {
    return -1;
  } else return 1;
});

/*Завдання
Відсортувати котів від найстаршого до наймолодшого.
Можете використовувати для вирішення цієї задачі ту форму,
яку я показав вам на парі, а можете скористатись такою формою:

*/
//Рішення

function compareFunction2(cat1, cat2) {
  if (cat2.age < cat1.age) {
    return -1;
  } else {
    return 1;
  }
}
catArray.sort(compareFunction2);
console.log(catArray);

/*Завдання
Відсіяти всіх котів окрім чорних.
*/

//Рішення
const blackCatArray = catArray.filter((cat) => {
  return cat.color === "black";
});

/*Завдання
Створити новий масив, який складається з імен котів.
*/
//Рішення

const namesCatArray = catArray.map((cat) => {
  return cat.name;
});

//Написати свій масив
/*
function MyArray() {
this.length = 0;
this.push = function() {
  for(let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
  }
  return this.length;
}
this.pop = function() {              // Pop method in array - удаляєт последний элемент
  if(this.length > 0) {
  let lastItem = this[this.length - 1];
  delete this[this.length - 1];
  this.length --;
  return lastItem;
}
}
}

const arr = new MyArray();
 */

/*Завдання
перепишіть push таким чином щоб push міг приймати та додавав до масиву будь-яку кількість переданих елементів
 arr.push(3,2,1,3,4,5555,2,1);
 arguments

*/
//Рішення
function MyArray() {
  this.length = 0;
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };
}

const cat1 = {
  name: "Barsik",
  color: "red",
  age: 1,
};
const cat2 = {
  name: "Barsik",
  color: "red",
  age: 1,
};

const catMethods = {
  run: function () {
    console.log(`${this.name} is running!`);
  },
  meow: function () {
    console.log(`${this.name} is meowing!`);
  },
};

cat1.__proto__ = catMethods;
cat2.__proto__ = catMethods;

cat1.run(); // this у методі run буде вказувати на об'єкт, який іде до крапки




function MyArray1() {         //функція-конструктор масивів
  this.length = 0;
}

function myProtoArray() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  },
  this.pop = function () {
    if (this.length > 0) {
      let lastItem = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return lastItem;
    }
  }
}

MyArray1.prototype = myProtoArray;
const arr5 = new MyArray1();


/*Завдання
LADDER
Створити функцію-конструктор для сходів
Об'єкт має властивість
currentStair - сходинка, на якій ми зараз знаходимось, початково = 0
Має методи
up() - піднімає на сходину вище
down() - опускає на сходинку нище
showStair() - показує на якій сходинці ми зараз знаходимось
*/

function Ladder() {
  this.currentStair = 0;
}

function LadderProto() {
  this.up = function() {
    this.currentStair++;
    return this;
  }
  this.down = function() {
    this.currentStair--;
    return this;
  }
  this.showStair = function() {
    return this.currentStair;
  }
}
Ladder.prototype = new LadderProto();
const ladder = new Ladder();



/*Завдання
Зробити функцію-конструктор об'єкту Accumulator, який приймає певне початкове значення при створенні

new Accumulator(startingValue)
має властивість 
value

має метод read(), який за допомогою prompt приймає від користувача чтсло та додає його до value,
повертає значення поточного value
(перевірка на число)
*/


//Рішення
function Accumulator(startingValue = 0) {
  this.value = startingValue;
}
function AccumulatorPrototype() {
this.read = function () {
  const userValue = Number(prompt('Put a number'));
  if(Number.isNaN(userValue)){
    console.log('Is not a number');
  } else {
    this.value = userValue;
  }
}
}
Accumulator.prototype = new AccumulatorPrototype();





