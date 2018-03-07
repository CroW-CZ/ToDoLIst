var todoText = document.getElementById('textbox');
var button = document.getElementById('button');
var todoList = document.getElementById('list');
var todoTemplate = document.getElementById('todoTemplate').innerHTML;
var todo = [];
var done = [];

button.addEventListener('click', addTodo);
todoText.addEventListener('keyup', checkEnter);
todoList.addEventListener('change', todoStateChange);

load();
displayList();

function checkEnter(event) {
  if(event.keyCode == 13){
    addTodo();
  }
}

function addTodo() {
  if (todoText.value == '') {
    return;
  }
  todo.unshift(todoText.value);
  todoText.value = '';
  displayList();
  save();
}

function todoStateChange(event) {
  var checkbox = event.target;
  if (checkbox.className ==! 'checkbox'){
    return;
  }
  if (checkbox.checked){
    checkbox.outerHTML = '<input type="checkbox" class="checkbox" checked>';
  }
  else if (!checkbox.checked) {
    checkbox.outerHTML = '<input type="checkbox" class="checkbox">';
  }
  save();
}

function save() {
  //localStorage.setItem('ToDoList', todoList.innerHTML);
  localStorage.setItem('ToDo', JSON.stringify(todo));
  localStorage.setItem('Done', JSON.stringify(done));
}

function load() {
  //return localStorage.getItem('ToDo');.
  todo = JSON.parse(localStorage.getItem('ToDo'));
  done = JSON.parse(localStorage.getItem('Done'));
  if (todo == null){
    todo = [];
  }
  if (done == null){
    done = [];
  }
}

function displayList() {
  todoList.innerHTML = '';
  for (var i = 0; i < todo.length; i++){
    todoList.innerHTML += todoTemplate;
    var newTodo = document.getElementById('add');
    newTodo.innerHTML += todo[i];
    newTodo.removeAttribute('id');
  }
  for (var i = 0; i < done.length; i++){
    todoList.innerHTML += todoTemplate;
    var newTodo = document.getElementById('add');
    newTodo.innerHTML += done[i];
    newTodo.removeAttribute('id');
  }
}
