import {question} from 'readline-sync';


export function inputText() {
    let usersText = question('Enter your text: ')
    console.clear();
    console.log(`Your text:\n${usersText}\n`);
    return usersText;
}

export function pureText(text) {
    return text.replace(/[^\w\s]/g, '').split(/\s+/);
}

export function quantityCounter(array) {
    return array.length;
}

export function differentWordCounter(array) {
    let differentWords = [];
    for (let word of array) {
        word = word.toLowerCase();
        if (!(differentWords.includes(word))) {
            differentWords.push(word);
        }
    }
    return differentWords.length;
}

export function longestWord(array) {
    let longestWord = '';
    for (let word of array) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}