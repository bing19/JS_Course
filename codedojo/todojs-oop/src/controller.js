class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.on('add', this.addTodo.bind(this));
        this.view.on('toggle', this.toggleTodo.bind(this));
        this.view.on('edit', this.editTodo.bind(this));
        this.view.on('remove', this.removeTodo.bind(this));

        this.view.show(model._state);
    }

    addTodo(title) {
        const todo = this.model.addItem({
            id: Date.now(),
            title,
            completed: false
        });

        this.view.addItem(todo);
    }

    toggleTodo({id, completed}) {
        const item = this.model.updateItem(id, {completed});
        this.view.toggleItem(item);
    }

    editTodo({id, title}) {
        const item = this.model.updateItem(id, {title});
        this.view.editItem(item);
    }

    removeTodo(id) {
        this.model.removeItem(id);
        this.view.removeItem(id);
    }
}

export default Controller;