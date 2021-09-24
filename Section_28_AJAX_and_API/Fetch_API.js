// console.log(fetch('https://api.cryptonator.com/api/ticker/btc-usd'));

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('Response, Waiting to Parse', res);
//         return res.json();
//     })
//     .then(data => {
//         console.log('Data Parsed...');
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log('Oh No! Error!', e);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log('Something Went Wrong!!!', e);
    }
}

fetchBitcoinPrice();