import { EventEmitter } from './helpers';
import Db from './db';

class Model extends EventEmitter {

    constructor(state = []) {
        super();

        const storage = new Db();
        this._state = storage.load() || state;
        this.on('change', state => storage.save(state));
    }

    getItem(id) {
        return this._state.find(item => item.id == id)
    }

    addItem(item) {
        this._state.push(item);
        this.emit('change', this._state);
        return item;
    }

    updateItem(id, data) {
        const item = this.getItem(id);
        Object.keys(data).forEach(prop => item[prop] = data[prop]);
        this.emit('change', this._state);
        return item;
    }

    removeItem(id) {
        const index = this._state.findIndex(item => item.id == id);

        if (index > -1) {
            this._state.splice(index, 1)[0];
        }
        
        this.emit('change', this._state);
    }

}

export default Model;