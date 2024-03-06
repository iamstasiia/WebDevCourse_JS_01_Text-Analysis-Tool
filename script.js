import {
    inputText,
    pureText,
    quantityCounter,
    differentWordCounter,
    longestWord} from './functions.js';


function textanalyseTool() {
    let pureTextArray = pureText(inputText());
    //console.log(pureTextArray);

    console.log('Your text consists of',
    quantityCounter(pureTextArray), 'words.');
    
    console.log('Different words are used:',
    differentWordCounter(pureTextArray));

    console.log('The longest word in the text is:',
    longestWord(pureTextArray));
}

textanalyseTool();

/*

    Hallo Welt, hallo JavaScript!

*/