let button, dog;

function setup() {
    button = document.getElementById("button");
    dog = document.getElementById("dog");

    button.addEventListener("click", connect);
    connect();
}

function connect() {
    // Connect to the API, and then run the receive function.
    fetch("https://random.dog/woof.json").then(receive);
}

function receive(data) {
    // Once we receive the data, convert it to the JSON format, and then run the result function.
    data.json().then(result);
}

function result(json) {
    console.log(json);

    if (json.url.slice(-3) == "mp4" || json.url.slice(-4) == "webm") {
        let video = document.createElement("video");
        video.src = json.url;
        if (dog.firstChild) {
            dog.firstChild.remove();
        }
        video.width = window.innerWidth - 30;
        // video.style.maxHeight = "85vh";
        dog.appendChild(video);

        video.addEventListener("ended", connect);
        video.play();
    } else {
        let image = document.createElement("img");
        image.src = json.url;
        if (dog.firstChild) {
            dog.firstChild.remove();
        }
        image.width = window.innerWidth - 30;
        dog.appendChild(image);
        setTimeout(connect, 5000);
        image.style.maxHeight = "85vh";
        image.style.width = image.style.height * (image.width / image.height)
    }
}

window.addEventListener("load", setup);
