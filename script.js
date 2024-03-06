import { question } from 'readline-sync';
import {
    inputText,
    pureText,
    quantityCounter,
    differentWordCounter,
    longestWord,
    wordCounter} from './functions.js';


function textanalyseTool() {
    let prolongation = true;

    while (prolongation) {
        let pureTextArray = pureText(inputText());
        //console.log(pureTextArray);
    
        console.log('Your text consists of',
        quantityCounter(pureTextArray), 'words.');
        
        console.log('Different words are used:',
        differentWordCounter(pureTextArray));
    
        console.log('The longest word in the text is:',
        longestWord(pureTextArray));

        console.log('The following words are used:',
        wordCounter(pureTextArray));

        let userInput = question('\nDo you want to enter another text? (y/n): ');
            if (userInput.toLowerCase() !== 'y') {
                prolongation = false;
            }
    }
}

textanalyseTool();

/*

    Hallo Welt, hallo JavaScript!

*/