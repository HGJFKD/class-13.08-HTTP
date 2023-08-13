// Func load
window.addEventListener('load', main)

// div root
const rootDiv = document.getElementById('root');

// header div
const header = document.getElementById('header')

// button imprort random
const importRandomUserButton = () => {
    const button = createButton("Import random User")

    // func btn
    button.addEventListener('click', () => {
        rootDiv.textContent = ""
        createCard()
    })
    header.appendChild(button);
}

// Btn five random male users
const import5RandomMaleUsers = () => {
    const button = createButton("Import five random male User")

    // func btn
    button.addEventListener('click', () => {
        const fiveMaleUsers = responseRandom('https://randomuser.me/api/?gender=male&results=5')
        console.log(fiveMaleUsers);
    })
    header.appendChild(button);
}

// Creat joke button
const jokeButton = () => {
    const btn = createButton('Create a new joke')
    // Btn func
    btn.addEventListener('click', () => {
        createCardJoke()
    })
    header.appendChild(btn)
}


// Import random user
const responseRandom = async (url) => {

    const data = await fetch(url)
    if (!data.ok) {
        throw new Error('Error')
    }

    // User Ob
    const user = await data.json()

    // Name
    const name = user.results[0].name.title + ": "
        + user.results[0].name.first + " "
        + user.results[0].name.last;
    // Email
    const email = user.results[0].email
    // Picture
    const picture = user.results[0].picture.large
    // Age
    const age = user.results[0].dob.age

    return [user, name, email, picture, age]
}

// Create div func
const createDiv = () => {
    const div = document.createElement('div')
    div.id = 'divId'
    return div
}

// Create img func
const createImg = (imgId) => {
    const img = document.createElement('img')
    img.id = 'imgId'
    img.src = imgId
    return img
}

// Create h by type func
const createH = (Type, nameId) => {
    const h3 = document.createElement(Type)
    h3.id = 'h3Id'
    h3.textContent = nameId
    return h3
}

// Create Button
const createButton = (text) => {
    const button = document.createElement('button');
    button.className = "button";
    button.textContent = text;
    return button
}

// createCard
async function createCard() {

    const div = createDiv()
    try {
        const randomUser = await responseRandom('https://randomuser.me/api')
        const name = createH('h2', randomUser[1])
        const email = createH('p', randomUser[2])
        const img = createImg(randomUser[3])
        const age = createH('h2', 'age: ' + randomUser[4])
        div.appendChild(name)
        div.appendChild(email)
        div.appendChild(img)
        div.appendChild(age)
        rootDiv.appendChild(div)
    } catch {
        console.error('error');
    }

}

// create Card Joke
async function createCardJoke() {

    const div = createDiv()
    // Joke url
    const randomJokeUrl = 'https://api.humorapi.com/jokes/search?api-key=d34fb8834b2040b2a4ba5f3745ff6d9b'
    try {
        const randomJoke = await responseRandom(randomJokeUrl)
        const title = createH('h2', 'Joke')
        const joke = createH('p', randomJoke[0])
        div.appendChild(title)
        div.appendChild(joke)
        rootDiv.appendChild(div)
    } catch {
        console.error('error');
    }
}

// Main func
function main() {
    importRandomUserButton()
    import5RandomMaleUsers()
    jokeButton()
};

