var todoText = document.getElementById('textbox');
var button = document.getElementById('button');
var todoList = document.getElementById('list');
var todoTemplate = document.getElementById('todoTemplate').innerHTML;

button.addEventListener('click', addTodo);

function addTodo(event) {
  if (todoText.value == '') {
    return;
  }
  todoList.innerHTML += todoTemplate;
  var newTodo = document.getElementById('add');
  newTodo.innerHTML += todoText.value;
  todoText.value = '';
  newTodo.id = 'added';
}
