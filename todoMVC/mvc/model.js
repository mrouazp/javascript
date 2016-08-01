define('model', [], function () {
    function Model(todos) {

        var self = this;

        self.addTodo = function (todo) {
            todos.push({done: false, value: todo});
        };

        self.editTodo = function (todo, id) {
            todos[id].value = todo;
        };

        self.completeTodo = function (checked, id) {
            todos[id].done = checked;
        };

        self.getTodo = function (id) {
            return todos[id].value;
        };

        self.deleteTodo = function (id) {
            todos.splice(id, 1);
        };

        self.getTodos = function () {
            return todos;
        };

        self.setTodos = function (t) {
            todos = t;
        };

        return self;
    }

    return Model;
});