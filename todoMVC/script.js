var display = document.getElementById('display');
var task = document.getElementById('task');
var submit = document.getElementById('submit');
var removeCompleted = document.getElementById('removeCompleted');

var todos = [];
var edit = false;

submit.addEventListener('click', save);
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13)
        save();
});

function save() {
    if (edit === false)
        addTodo(task.value);
    else {
        editTodo(task.value, edit);
        edit = false;
    }
    show();
}

display.addEventListener('click', function(e) {
    if (e.target.className !== 'delete')
        return;
    var id = e.target.parentElement.dataset.id;
    deleteTodo(id);
    show();
});

display.addEventListener('click', function(e) {
    if (!e.target.matches('.todo p'))
        return;
    var id = e.target.dataset.id;
    task.value = getTodo(id);
    task.focus();
    edit = id;
});

display.addEventListener('change', function(e) {
    if (!e.target.matches('.todo input'))
        return;
    var id = e.target.parentElement.dataset.id;
    completeTodo(e.target.checked, id);
});

removeCompleted.addEventListener('click', function() {
    todos = todos.filter(function(todo) {
        return !todo.done;
    });
    edit = false;
    show();
});

function addTodo(todo) {
    todos.push({done: false, value: todo});
}

function editTodo(todo, id) {
    todos[id].value = todo;
}

function completeTodo(checked, id) {
    todos[id].done = checked;
}

function getTodo(id) {
    return todos[id].value;
}

function deleteTodo(id) {
    todos.splice(id, 1);
}

function show() {
    display.innerHTML = "";
    todos.forEach(showOne);
}

function showOne(todo, id) {
    var todoTemplate = document.createElement('div');
    todoTemplate.className = 'todo';
    todoTemplate.innerHTML = '<span>id = ' + id +
            '</span><p data-id=' + id + '><input type="checkbox"' + 
            ((todo.done)? " checked" : "") +'>' +
            todo.value + '<span class="delete">X</span></p>';
    display.appendChild(todoTemplate);
}
