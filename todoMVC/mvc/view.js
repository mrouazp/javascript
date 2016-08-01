define('view', [], function () {
    function View() {

        var self = this;

        function getControls() {
            return self.controls = {
                display: document.getElementById('display'),
                task: document.getElementById('task'),
                submit: document.getElementById('submit'),
                removeCompleted: document.getElementById('removeCompleted')
            };
        }

        self.show = function(todos) {
            self.controls.display.innerHTML = "";
            todos.forEach(showOne);
        };

        function showOne(todo, id) {
            var todoTemplate = document.createElement('div');
            todoTemplate.className = 'todo';
            todoTemplate.innerHTML = '<span>id = ' + id +
                    '</span><p data-id=' + id + '><input type="checkbox"' +
                    ((todo.done) ? " checked" : "") + '>' +
                    todo.value + '<span class="delete">X</span></p>';
            self.controls.display.appendChild(todoTemplate);
        }

        getControls();
        return self;
    }
    return View;
});