// Get 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))

// Post
const reqPost = {
    method: 'post',
    body: JSON.stringify({ name: 'Israel' }),
    headers: {
        'Content-Type': 'application/json'
    }
}
fetch('https://jsonplaceholder.typicode.com/users', reqPost)
    .then(response => response.json())
    .then(json => console.log(json))

// Put (update data)
const reqPut = {
    method: 'put',
    body: JSON.stringify({ "name": "Chaim" }),
    headers: {
        'Content-Type': 'application/json'
    }
}
fetch('https://jsonplaceholder.typicode.com/users/1', reqPut)
    .then(response => response.json())
    .then(json => console.log(json))


// ניהול שגיאות
// Delete
const reqDelete = {
    method: 'delete'
}
fetch('https://jsonplaceholder.typicode.com/users/1', reqDelete)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Some error')
        }
    })
    .then(data => console.log(data))
    .catch(error => {
    });

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const data = await response.json()
            console.log(data);
        } else {
            throw new Error('Some error')
        }
    } catch (error) {
        throw new Error('Catch error')
    }
}
fetchData()