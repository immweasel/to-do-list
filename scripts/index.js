// Получаем необходимые элементы из DOM
const form = document.querySelector('.form');
const input = form.querySelector('.form__input');
const list = document.querySelector('.list');
const counter = document.querySelector('.counter');

// Функция для добавления нового элемента в список
function addItem(text) {
  // Создаем новый элемент списка
  const newItem = document.createElement('li');
  newItem.classList.add('list__item');

  // Добавляем текст в новый элемент списка
  const newText = document.createTextNode(text);
  newItem.appendChild(newText);

  // Добавляем кнопку удаления элемента списка
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('list__delete-button');
  deleteButton.innerHTML = '&times;';
  newItem.appendChild(deleteButton);

  // Добавляем новый элемент списка в список
  list.appendChild(newItem);

  // Обновляем счетчик элементов списка
  updateCount();
}

// Функция для обновления счетчика элементов списка
function updateCount() {
  const countValue = list.children.length;
  counter.innerText = countValue;
}

// Обработчик отправки формы для добавления нового элемента списка
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();

  // Если поле ввода не пустое, добавляем новый элемент в список
  if (text !== '') {
    addItem(text);
    input.value = '';
  }
});

// Обработчик клика на кнопку удаления элемента списка
list.addEventListener('click', (event) => {
  const element = event.target;

  // Если клик был по кнопке удаления элемента списка, удаляем элемент
  if (element.classList.contains('list__delete-button')) {
    const listItem = element.parentElement;
    list.removeChild(listItem);
    updateCount();
  }
});
