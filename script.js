import {question} from 'readline-sync';


function textanalyseTool() {
    let usersText = question('Enter your text: ');
    console.clear();
    console.log(`Your text:\n${usersText}\n`);

    let pureTextArray = usersText.replace(/[^\w\s]/g, '').split(/\s+/);
    //console.log(pureTextArray);

    let wordCount = pureTextArray.length;
    console.log('Your text consists of', wordCount, 'words.');
    
    let differentWords = [];
    for (let word of pureTextArray) {
        word = word.toLowerCase();
        if (!(differentWords.includes(word))) {
            differentWords.push(word);
        }
    }
    console.log('Different words are used:', differentWords.length);

    let longestWord = '';
    for (let word of pureTextArray) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    console.log('The longest word in the text is:', longestWord);
}

textanalyseTool();