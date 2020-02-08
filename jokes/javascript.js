
let url = "https://official-joke-api.appspot.com/jokes/random"

function setup() {
    connect()
}

function connect() {
    fetch(url).then(receive)
}

function receive(response) {
    response.json().then(result)
}

function result(json) {
    console.log(json)
}

window.addEventListener("DOMContentLoaded", setup);
