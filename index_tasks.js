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
Якщо у парному масиві число парне – замінити елемент масиву рядком 'pp'.
Якщо у парному масиві число непарне – замінити елемент масиву рядком – 'pn'.
Якщо у непарному масиві число парне – замінити елемент масиву рядком – 'np'.
Якщо у непарному масиві число непарне – замінити елемент масиву рядком – 'nn'.

парний масив, парне число – 'pp'. 
непарний масив, парне число - 'np'. 
....
Рядки формувались таким чином.
  */