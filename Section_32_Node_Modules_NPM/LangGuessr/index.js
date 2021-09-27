import { franc } from 'franc';
import langs from 'langs';
const input = process.argv[2];


// const langCode = franc('Alle menslike wesens word vry');
const langCode = franc(input);
if (langCode === 'und') {
    console.log("Sorry, couldn't figure out the language! Try with more words");
} else {
    const language = langs.where('3', langCode);
    console.log(`Our best guess is: ${language.name}`);
}


// console.log(langCode);
// // console.log(franc('Alle menslike wesens word vry'));

// const language = langs.where('3', langCode);
// console.log(language.name);
