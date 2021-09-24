// axios.get('http://api.tvmaze.com/search/shows?q=dark')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log('Error!', err);
//     })

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } } // allows for multiple such as header along with query
    // const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    // console.log(res.data);
    // console.log(res.data[0].show.image.medium);
    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        // console.log(result);
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}