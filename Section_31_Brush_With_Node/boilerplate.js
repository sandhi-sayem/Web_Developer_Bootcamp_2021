const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// fs.mkdir('Dogs', { recursive: true }, (err) => { // async version
//     console.log('In the callback!!');
//     if (err) throw err;
// });

try {
    fs.mkdirSync(folderName); // sync version
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log('Something went wrong!!');
    console.log(e);
}
// console.log('I come after MKDIR!!');