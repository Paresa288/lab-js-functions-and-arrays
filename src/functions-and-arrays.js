// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(number1, number2) {
    let maxNumber;

    if (number1 > number2) {
        maxNumber = number1;
    }
    if (number2 > number1) {
        maxNumber = number2;
    } 
    if (number1 === number2) {
        maxNumber = number1 && number2;
    }

    return maxNumber;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    console.log("Ejecutando funcion", words);
    let longestWord = "";
    if (words.length === 0) {
            return null;
        }
        
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        console.log("Iterating", i, word);

        if (word.length > longestWord.length) {
            longestWord = word;
        } 
        
        
        
    }
    console.log("Return:", longestWord);
    return longestWord;

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
