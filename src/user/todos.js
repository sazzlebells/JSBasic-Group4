async function fetchTodos(userId) {
    //input userId return user details as json
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}/todos`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user detail: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.log(e);
    }
}

function listTodos(todosElementId, userId) {

    let todosElement = document.getElementById(todosElementId);

    fetchTodos(userId)
        .then(todos => {
            if (!todos) {
                alert(`Id ${userId} no data`)
                return
            }

            // array
            var arr = new Array()

            todoElement.innerHTML = ``
            var table = todosElement.appendChild(document.createElement('table'))

            todos.map(todo => {
                if (!todo.completed) {
                    // set value into array
                    arr.push(todo)
                    // this is recusive loop
                    return
                }

                table.appendChild(todoElement(todo))
            })

            arr.map(todo => {
                table.appendChild(todoElement(todo))
            })

        })
        .catch(error => {
            console.log(error)
        })
}

function todoElement(todo) {
    const colElement = document.createElement('td');
    colElement.innerHTML = todo.title;
    const colElement2 = document.createElement('td');
    colElement2.innerHTML = todo.completed == true ? 'in progress' : 'completed';

    const todoTitleElement = document.createElement('tr');
    todoTitleElement.appendChild(colElement);
    todoTitleElement.appendChild(colElement2);

    return todoTitleElement
}