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