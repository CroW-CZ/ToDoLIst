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
    var todoIdNum = parseInt(checkbox.parentElement.id.slice(5));
    var text = checkbox.parentElement.children[1].innerHTML;
    done.push(text);
    todo.splice(todoIdNum, 1);
  }
  else if (!checkbox.checked) {
    var doneIdNum = parseInt(checkbox.parentElement.id.slice(5));
    text = checkbox.parentElement.children[1].innerHTML;
    todo.unshift(text);
    done.splice(doneIdNum, 1);
  }
  displayList();
  save();
}

function save() {
  localStorage.setItem('ToDo', JSON.stringify(todo));
  localStorage.setItem('Done', JSON.stringify(done));
}

function load() {
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
    newTodo.children[1].innerHTML += todo[i];
    newTodo.id = 'todo_' + [i];
    newTodo.children[0].outerHTML = '<input type="checkbox" class="checkbox">';
  }
  for (var i = 0; i < done.length; i++){
    todoList.innerHTML += todoTemplate;
    var newTodo = document.getElementById('add');
    newTodo.children[1].innerHTML += done[i];
    newTodo.id = 'done_' + [i];
    newTodo.children[0].outerHTML = '<input type="checkbox" class="checkbox" checked>';
  }
}
