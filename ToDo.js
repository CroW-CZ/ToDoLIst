var todoText = document.getElementById('textbox');
var button = document.getElementById('button');
var todoList = document.getElementById('list');
var todoTemplate = document.getElementById('todoTemplate').innerHTML;

button.addEventListener('click', addTodo);
todoText.addEventListener('keyup', checkEnter);

todoList.innerHTML = load();

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
  save();
}

function todoStateChange(checkbox) {
  if(checkbox.checked){
    checkbox.parentElement.id = 'done';
    checkbox.outerHTML = '<input type="checkbox" id="checkbox" checked onchange="todoStateChange(this);">';
    save();
  }
  else {
    checkbox.parentElement.id = 'todo';
    checkbox.outerHTML = '<input type="checkbox" id="checkbox" unchecked onchange="todoStateChange(this);">';    
    save();
  }
}

function save() {
  var saveList = document.getElementById('todo').parentElement.innerHTML;
  localStorage.setItem('ToDoList', saveList);
}

function load() {
  return localStorage.getItem('ToDoList');
}
