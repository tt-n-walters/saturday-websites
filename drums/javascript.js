let keys

function setup() {
    keys = document.querySelectorAll(".key");
    console.log(keys);

    keys.forEach(function(key) {
        function removePlaying(event) {
            // Check if the key is currently playing
            // And if the transition was the "transform" transition
            if (key.classList.contains("playing") && event.propertyName == "transform") {
                key.classList.remove("playing");
                // Find all audio files in the HTML
                let allAudio = document.querySelectorAll("audio")
                // Loop through all audio files
                allAudio.forEach(function(audio) {
                    // Find the key data written in the HTML
                    let audioKey = audio.dataset.key;
                    // Check if the key data is the same as the key pressed
                    if (audioKey == key.children[0].innerText) {
                        // Play the audio
                        audio.currentTime = 0
                        audio.play()
                    }
                })
            }
        }
        key.addEventListener("transitionend", removePlaying)
    })
}

function keyPressed(event) {
    console.log(event);

    for (let i = 0; i < keys.length; i++) {
        // Find the letter saved in the HTML, either "a", "s", "d", etc..
        let keySymbol = keys[i].children[0].innerText;

        // If the keySymbol is the same as the key that was pressed
        if (keySymbol == event.key) {
            // Add the "playing" class to the HTML
            keys[i].classList.add("playing");
        }
    }
}

window.addEventListener("load", setup);
window.addEventListener("keydown", keyPressed);


window.addEventListener("DOMContentLoaded", function() {

    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        // Picks a random snowflake character
        snowflake.innerText = ["❆", "❅", "❄"][Math.floor(Math.random() * 3)]

        // Picks a random x coordinate
        snowflake.style.left = Math.random() * window.innerWidth + "px"
        // Picks a random delay before falling
        snowflake.style.animationDelay = Math.random() * 10 + "s" + ", " + (Math.random() * 2) + "s"

        snowflake.classList.add("snowflake")
        document.body.append(snowflake)
    }
})
