module.exports.User = class User {
    id;
    name;
    email;

    constructor(){

    }

    loadUser(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(result => {
            return result.json();
        })
        .then(result => {
            this.id = result.id;
            this.name = result.name;
            this.email = result.email;
            return {id: this.id, name: this.name, email: this.email};
        })
        .catch(err => {
            throw err;
        });
    }
};