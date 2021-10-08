/*
generateWord() concatenates a string, with a length specified by the user, of letters from the English alphabet randomly chosen by the Math.random function and displays them on the page as a paragraph element on the page with a nested function clicked()
*/

function clicked(word) {
    const par = document.getElementById("paragraph");
    par.innerHTML = word;
}
function generateWord(userLength) {
    const lowerA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const upperA = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // const length = window.prompt("Enter length");
    const length = userLength;
    let foo = "";
    for(let i = 0; i < length; i++) {
        let j = Math.floor((Math.random() * 26));
        if (i == 0) {
            foo += upperA[j];
        } else {
            foo += lowerA[j];
        }
    }
    clicked(foo);
}

function getLength() {
    const userLength = document.getElementById("lengthSubmitted").value;
    generateWord(userLength);    
}

const button1 = document.getElementById("button1");
button1.addEventListener("click", getLength);
// button1.addEventListener("click", generateWord);