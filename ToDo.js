var todoText = document.getElementById('textbox');
var button = document.getElementById('button');
var todoList = document.getElementById('list');
var todoTemplate = document.getElementById('todoTemplate').innerHTML;

button.addEventListener('click', addTodo);
todoText.addEventListener('keyup', checkEnter);
todoList.addEventListener('change', todoStateChange);

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
  newTodo.removeAttribute('id');
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
  localStorage.setItem('ToDoList', todoList.innerHTML);
}

function load() {
  return localStorage.getItem('ToDoList');
}
