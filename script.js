let btn = document.querySelector("button");

function randomNum0to255() {
    return Math.floor(Math.random()*255+1);
}

function getRandomColor() {
    let red = randomNum0to255();
    let green = randomNum0to255();
    let blue = randomNum0to255();

    return `rgb(${red},${green},${blue})`;
}

btn.addEventListener("click", () => {
    let h1 = document.querySelector("h1");
    h1.innerText = getRandomColor();

    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomColor();

    console.log("color updated");
})