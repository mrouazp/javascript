define('controller', [], function () {
    function Controller(View, Model) {

        var self = this;
        var edit = false;

        View.controls.submit.addEventListener('click', save);
        document.addEventListener('keydown', function (e) {
            if (e.keyCode == 13)
                save();
        });

        function save() {
            if (edit === false)
                Model.addTodo(View.controls.task.value);
            else {
                Model.editTodo(View.controls.task.value, edit);
                edit = false;
            }
            View.show(Model.getTodos());
        }

        View.controls.display.addEventListener('click', function (e) {
            if (e.target.className !== 'delete')
                return;
            var id = e.target.parentElement.dataset.id;
            Model.deleteTodo(id);
            View.show(Model.getTodos());
        });

        View.controls.display.addEventListener('click', function (e) {
            if (!e.target.matches('.todo p'))
                return;
            var id = e.target.dataset.id;
            View.controls.task.value = Model.getTodo(id);
            View.controls.task.focus();
            edit = id;
        });

        View.controls.display.addEventListener('change', function (e) {
            if (!e.target.matches('.todo input'))
                return;
            var id = e.target.parentElement.dataset.id;
            Model.completeTodo(e.target.checked, id);
        });

        View.controls.removeCompleted.addEventListener('click', function () {
            var todos = Model.getTodos().filter(function (todo) {
                return !todo.done;
            });
            Model.setTodos(todos);
            edit = false;
            View.show(Model.getTodos());
        });

        return self;
    }
    
    return Controller;
});