let randomAnimal =[
    "cat",
    "dog",
    'elephant',
    "rat",
    "lion",
    "shark",
    "goat",
    "cow",
    "eagle",
    "lama",
    "bear",
    "mouse",
    "sheep",
    "zebra",
    "chicken",
    "snake",
    "monkey",
    "turtle",
    "donkey",
    "koala"
];

let answer = randomAnimal[Math.floor(Math.random() * randomAnimal.length)];// random word
let mistakes = 0;
let pictureCounter = 1;
let word =answer.split(""); // random word split in a array of letters
let remainingLetters = word.length;
console.log(word);
console.log(remainingLetters)
console.log(answer)



//generate keyboards button

function generateKeyboard(){
    
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let arrayLetter = letters.split(''); 

    arrayLetter.forEach(element =>{ //create button for each letters, with an id and a class
    let btn = document.createElement("button");
    btn.setAttribute("class", "letter");
    btn.setAttribute("id", element);
    btn.setAttribute("onclick", "handleClick("+ element + ")");// add an event onclick to each button
    document.getElementById('keyboard').appendChild(btn);
    btn.innerHTML = element;// insert the letter inside the button
    })
}


function guessWord(){ //create the blank spot according to the number of letters to guess
    word.forEach(letter =>{
        letter = document.createElement("span");
        letter.setAttribute("class", "underscore")
        document.getElementById("WordToGuess").appendChild(letter)
        letter.innerHTML = " _____ ";
    })
}


function handleClick(chosenLetter){
    let blank = document.querySelectorAll('.underscore');
    //console.log(Array.from(blank));
    for(i = 0; i<word.length; i++){ //For each  element of the word, check if the clicked letters is inside the word
        if(word[i]===chosenLetter.innerHTML){
            Array.from(blank)[i].innerHTML = chosenLetter.innerHTML;
            console.log(chosenLetter.innerHTML);//if yes, modify the HTML
            remainingLetters--;
        }
    }


    if(word.includes(chosenLetter.innerHTML)===false){ //if word doesn't include the letter, return false
        console.log("wrong");
        mistakes ++; //counter mistake +1
        pictureCounter ++;//change the image
        updateMistakes();
        updatePicture();
    }

    if(mistakes >= 6 ){
        alert("Game Over");
    }

    if(remainingLetters === 0){
        console.log(remainingLetters)
        alert("Bravo")
    }

}

function updateMistakes(){
    document.getElementById('mistakes').innerHTML = mistakes
}


function updatePicture(){
    document.getElementById("hangmanPic").src = 'pictures/hangman' + pictureCounter + '.JPG'
}


generateKeyboard();
guessWord();


document.getElementById('btn').addEventListener('click', function(){//reset button
    document.getElementById('WordToGuess').innerHTML = " ";
    answer = randomAnimal[Math.floor(Math.random() * randomAnimal.length)];
    console.log(answer)
    word =answer.split("");
    remainingLetters = word.length;
    guessWord();
    mistakes = 0;
    document.getElementById('mistakes').innerHTML = 0
    pictureCounter = 1;
    document.getElementById("hangmanPic").src = 'pictures/hangman' + pictureCounter + '.JPG'
})