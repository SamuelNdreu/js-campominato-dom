const buttonPlay = document.querySelector("a.btn");


buttonPlay.addEventListener('click', function () {


const divBoxElement = document.querySelector(".box");
divBoxElement.classList.add('custom_border');

//Reset Grid when I plick
divBoxElement.innerHTML = "";

for (let i = 0; i < 100; i++) {
    const newSquare = getNewSquare();
    divBoxElement.appendChild(newSquare);
    newSquare.append(i + 1);
}

});

function getNewSquare() {
    const newSquare = document.createElement("div");
    newSquare.classList.add('square');
    newSquare.addEventListener("click", function () {
    newSquare.classList.toggle('clicked');
    })
    return newSquare;
}  


