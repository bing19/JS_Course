class Db {

    save(data) {
        const string = JSON.stringify(data);
        localStorage.setItem('todos', string);
    }
    
    load() {
        const string = localStorage.getItem('todos');
        const data = JSON.parse(string);
        
        return data;
    }
}

export default Db;