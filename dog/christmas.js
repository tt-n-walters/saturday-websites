window.addEventListener("DOMContentLoaded", function() {
    let snowflakeChars = ["❆", "❅", "❄"]
    
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        // Picks a random snowflake character
        snowflake.innerText = snowflakeChars[Math.floor(Math.random() * 3)]

        // Picks a random x coordinate
        snowflake.style.left = Math.random() * window.innerWidth + "px"
        // Picks a random delay before falling
        snowflake.style.animationDelay = Math.random() * 10 + "s" + ", " + (Math.random() * 2) + "s"

        snowflake.classList.add("snowflake")
        document.body.append(snowflake)
    }
})
