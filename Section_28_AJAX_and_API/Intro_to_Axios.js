// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log('Error!', err);
//     })

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
//         console.log(res.data.ticker.price);
//     } catch (e) {
//         console.log('Error!', e);
//     }
// }

// fetchBitcoinPrice();

// const jokes = document.querySelector('#jokes');
// const getDadJoke = async () => {
//     const config = { headers: { Accept: 'application/json' } };
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     // console.log(res.data.joke);
//     const newLI = document.createElement('li');
//     newLI.append(res.data.joke);
//     jokes.append(newLI);
// }

// getDadJoke();

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    // console.log(jokeText);
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        return 'No Jokes Available! Sorry :(';
    }
}

button.addEventListener('click', addNewJoke);
