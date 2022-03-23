// module.exports.User = class User {
//     id;
//     name;
//     email;
//     phone;
//     constructor() {

//     }
//     loadUser(id) {
//         return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then(result => {
//                 return result.json();
//             })
//             .then(result => {
//                 this.id = result.id;
//                 this.name = result.name;
//                 this.email = result.email;
//                 this.phone = result.phone;
//                 return { id: this.id, name: this.name, email: this.email, phone: this.phone};
//             })
//             .catch(err => {
//                 throw err;
//             });
//     }

// };

async function loadUsers(userId) {
    //input userId return user details as json
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok){
            throw new Error(`Failed to fetch user detail: ${response.status}`);      
        }
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}

function getUserById(elmId, userId){
    //map users details
    const userContainerElement = document.getElementById(elmId);
    loadUsers(userId).then(user => {
        if(!user){
            userContainerElement.innerHTML = `No user with this ID`;
            return;
        }
        userContainerElement.innerHTML = `Full Name : `;
        userContainerElement.appendChild(userElement(user.name));
        userContainerElement.appendChild(document.createElement('br'));

        userContainerElement.appendChild(userElement(`Email : `));
        userContainerElement.appendChild(userElement(user.email));
        userContainerElement.appendChild(document.createElement('br'));

        userContainerElement.appendChild(userElement(`Phone : `));
        userContainerElement.appendChild(userElement(user.phone));
        userContainerElement.appendChild(document.createElement('br'));

        userContainerElement.appendChild(userElement(`Website : `));
        userContainerElement.appendChild(userElement(user.website));
        userContainerElement.appendChild(document.createElement('br'));
    })
    .catch(e => {
        console.log(e);
    })
}

function userElement(user){
    const userElm = document.createElement('span');
    userElm.innerHTML = user;

    return userElm;

}

