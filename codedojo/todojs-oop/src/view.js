import { createElem, EventEmitter } from './helpers';

class View extends EventEmitter {
    constructor() {
        super();
        
        this.form = document.getElementById('todo-form');
        this.input = document.getElementById('add-input');
        this.list = document.getElementById('todo-list');

        this.form.addEventListener('submit', this.handleAdd.bind(this));
    }

    createElement(todo) {
        const checkbox = createElem('input', {type: 'checkbox', className: 'checkbox', checked: todo.completed ? 'checked' : ''});
        const label = createElem('label', {className: 'title'}, todo.title);
        const editInput = createElem('input', { type: 'text', className: 'textfield' });
        const editButton = createElem('button', { className: 'edit' }, 'Изменить');
        const removeButton = createElem('button', { className: 'remove' }, 'Удалить');
        const item = createElem('li', { className: `todo-item ${todo.completed ? 'completed' : '' }`, 'data-id': todo.id }, 
                                        checkbox, label, editInput, editButton, removeButton);
        return this.addEventListeners(item);
    }

    addEventListeners(item) {
        const checkbox = item.querySelector('.checkbox');
        const editButton = item.querySelector('button.edit');
        const removeButton = item.querySelector('button.remove');

        checkbox.addEventListener('change', this.handleToggle.bind(this));
        editButton.addEventListener('click', this.handleEdit.bind(this));
        removeButton.addEventListener('click', this.handleRemove.bind(this));

        return item;
    }

    handleToggle({ target }) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');
        const completed = target.checked;
        // Обновить модель
        this.emit('toggle', {id, completed});
    }

    handleEdit({ target }){
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');
        const title = input.value;
        const isEditing = listItem.classList.contains('editing');

        if(isEditing) {
            // Нужно обновить в модели данные
            this.emit('edit', {id,title});
        } else {
            input.value = label.textContent;
            editButton.textContent = 'Сохранить';
            listItem.classList.add('editing');
        }

    }

    handleRemove({ target }) {
        const listItem = target.parentNode;
        const id = listItem.getAttribute('data-id');

        //Удалить из модели
        this.emit('remove', id);
    }

    handleAdd(event) {
        event.preventDefault();

        if(!this.input.value) return alert('Необходимо ввести название задачи');

        const value = this.input.value;

        //Добавить item в модель
        this.emit('add', value);

    }

    findListItem(id) {
        return this.list.querySelector(`[data-id = "${id}"]`);
    }

    addItem(todo) {
        const listItem = this.createElement(todo);
        this.input.value = '';
        this.list.appendChild(listItem);
    }

    toggleItem(todo) {
        const listItem = this.findListItem(todo.id);
        const checkbox = listItem.querySelector('.checkbox');

        checkbox.checked = todo.completed;

        if(todo.completed) {
            listItem.classList.add('completed');
        } else {
            listItem.classList.remove('completed');
        }
    }

    editItem(todo) {
        const listItem = this.findListItem(todo.id);
        const label = listItem.querySelector('.title');
        const input = listItem.querySelector('.textfield');
        const editButton = listItem.querySelector('button.edit');

        label.textContent = todo.title;
        editButton.textContent = 'Изменить';
        listItem.classList.remove('editing');
    }

    removeItem(id) {
        const listItem = this.findListItem(id);
        this.list.removeChild(listItem);
    }

    show(todos) {
        todos.forEach(todo => {
            const listItem = this.createElement(todo);

            this.list.appendChild(listItem);
        });
    }
}

export default View;