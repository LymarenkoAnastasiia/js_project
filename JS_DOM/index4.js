/*Завдання
  1. зробити input для вводу текста
  2. зробити кнопку, яка по натисненню перетворює текст з input на елемент списку

  <input type="text" />
  <button>Click to add</button>
  <ul>
  <li>Зробити щось одне</li>
  <li>Зробити щось інше</li>
  </ul>


  *до кожного li приєднати кнопку, за допомогою якої елемент зі списку можна видалити
  */

  const root = document.getElementById('root');
  const form = document.getElementById('form');

  const state = [];

  form.addEventListener('submit', addItem);

  function addItem(event) {
    event.preventDefault();
    const {target: {textInput: {value}}} = event;
    console.dir(target);
    //state.push();
  }