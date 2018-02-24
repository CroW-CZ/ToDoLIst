var todoText = document.getElementById('textbox');
var button = document.getElementById('button');
var todoList = document.getElementById('list');
var todoTemplate = document.getElementById('todoTemplate').innerHTML;

button.addEventListener('click', addTodo);
todoText.addEventListener('keyup', checkEnter);

function checkEnter(event) {
  if(event.keyCode == 13){
    addTodo();
  }
}

function addTodo() {
  if (todoText.value == '') {
    return;
  }
  todoList.innerHTML += todoTemplate;
  var newTodo = document.getElementById('add');
  newTodo.innerHTML += todoText.value;
  todoText.value = '';
  newTodo.id = 'added';
}

function todoStateChange(checkbox) {
  if(checkbox.checked){
    checkbox.parentElement.id = 'done';
  }
  else {
    checkbox.parentElement.id = 'todo';
  }
}
