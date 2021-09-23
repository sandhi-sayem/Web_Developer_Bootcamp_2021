// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com',
//     function (response) {
//         console.log('It Worked!');
//         console.log(response);
//     }, function (err) {
//         console.log('Error!', err);
// });

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('It Worked!');
//         console.log(response);
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log('It Worked Again!');
//                 console.log(response);
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log('It Worked Again (3rd req)!');
//                         console.log(response);
//                     }, function (err) {
//                         console.log('Error (3rd req)!!!', err);
//                     }
//                 )
//             },
//             function (err) {
//                 console.log('Error (2nd req)!!!', err);
//             }
//         )
//     }, function (err) {
//         console.log('Error!!!', err);
//     }
// );

// const request = fakeRequestPromise('yelp.com/api/coffee');
// request
//     .then(() => {
//         console.log('Promist Resolved!');
//         console.log('It worked!!!');
//     })
//     .catch(() => {
//         console.log('Promist Rejected!');
//         console.log('Oh no, Error!!!');
//     });

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('It worked!!! (page1)');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('It worked!!! (page2)');
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('It worked!!! (page3)');
//                     })
//                     .catch(() => {
//                         console.log('Oh no, Error!!! (page3)');
//                     })
//             })
//             .catch(() => {
//                 console.log('Oh no, Error!!! (page2)');
//             })
//     })
//     .catch(() => {
//         console.log('Oh no, Error!!! (page1)');
//     });

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('It Worked!!! (page1)');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2');
    })
    .then((data) => {
        console.log('It Worked!!! (page2)');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('It Worked!!! (page3)');
        console.log(data);
    })
    .catch((err) => {
        console.log('OH NO, A REQUEST FAILED!!!')
        console.log(err)
    })

