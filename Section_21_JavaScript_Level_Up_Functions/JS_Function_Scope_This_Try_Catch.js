// console.log('test');

// let eggsTotal = 0;

// function collectEggs() {
//     let totalEggs = 6;
//     eggsTotal = 8;
//     console.log(totalEggs);
// }

// console.log(eggsTotal);
// collectEggs();
// // console.log(totalEggs); // error since totalEggs resides inside the function
// console.log(eggsTotal);

// let bird = 'Scarlet Macaw';

// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(`Inside function: ${bird}`);
// }
// birdWatch();
// console.log(`Outside function: ${bird}`);


// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!';
// }

// console.log(radius);
// // console.log(PI); // error due to PI belonging to IF block

// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wonder Woman', 'Black Panther', 'Catwoman'];
//     function cryForHelp() {
//         for (let hero of heroes) {
//             console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
//         }
//     }
//     cryForHelp();
// }

// bankRobbery();

function bankRobbery() {
    const heroes = ['Spiderman', 'Wonder Woman', 'Black Panther', 'Catwoman'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}

bankRobbery();
