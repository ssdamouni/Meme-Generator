const memeForm = document.querySelector('form');
const memeDisplay = document.getElementById('newMemes');


memeForm.addEventListener("submit", function(event){
    event.preventDefault();
    let photoURL = document.getElementById("photo").value;
    let setup = document.getElementById("setup").value;
    let punchline = document.getElementById("punchline").value;

    let newMemeBackground = document.createElement("div");

    let setupElement = document.createElement("div");
    setupElement.innerText = setup;
    setupElement.setAttribute("class", "top-center");

    let punchlineElement = document.createElement("div");
    punchlineElement.innerText = punchline;
    punchlineElement.setAttribute("class", "bottom-center");

    let imageElement = document.createElement("img")
    imageElement.setAttribute("src", `${photoURL}`);
    imageElement.setAttribute("style", "width=100%");

    let removeButton = document.createElement("button");
    removeButton.innerText = "X";
    removeButton.setAttribute("id", "remove-button");

    memeForm.reset();

    memeDisplay.appendChild(newMemeBackground);
    newMemeBackground.setAttribute("class", "new-meme")
    newMemeBackground.appendChild(imageElement);
    newMemeBackground.appendChild(setupElement);
    newMemeBackground.appendChild(punchlineElement);
    newMemeBackground.appendChild(removeButton);
});

memeDisplay.addEventListener("click", function(event){
    event.preventDefault();
    let clickedButton = event.target;
    if (clickedButton.id === "remove-button"){
        clickedButton.parentElement.remove();
    }
})