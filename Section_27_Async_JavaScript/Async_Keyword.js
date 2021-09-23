// async function hello () {
//     // will return a promise
// }

// const sing = async () => {
//     // lajdsflj.alsjdkfls; // error on purpose, still return a promise with rejected
//     // throw new Error('Uh Oh');
//     throw ('uh oh');
//     return 'LA LA LA'
// }

// sing()
//     .then(data => {
//         console.log('Promise resolved with: ', data);
//     })
//     .catch(err => {
//         console.log('Oh No, Promise Rejected!!');
//         console.log(err);
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials!'
    if (password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid Password';
}

login('aldkjf')
    .then(msg => {
        console.log('Logged In!');
        console.log(msg);
    })
    .catch(err => {
        console.log('Error!');
        console.log(err);
    })

login('aldkjf', '242343')
    .then(msg => {
        console.log('Logged In!');
        console.log(msg);
    })
    .catch(err => {
        console.log('Error!');
        console.log(err);
    })

login('aldkjf', 'corgifeetarecute')
    .then(msg => {
        console.log('Logged In!');
        console.log(msg);
    })
    .catch(err => {
        console.log('Error!');
        console.log(err);
    })
