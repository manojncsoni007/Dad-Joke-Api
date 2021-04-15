let jokes = document.querySelector('#joke');
let btn = document.querySelector('#btn');




// function for fetch jokes using Fetch api and promise
// function fetchJokes() {
//     const setHeader = {
//         headers: {
//             accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHTML = data.joke;
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }



// fetching jokes using Async Await
const fetchJokes = async() => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    const response = await fetch('https://icanhazdadjoke.com/', setHeader);
    const data = await response.json();
    jokes.innerHTML = data.joke;
}

fetchJokes();
// click event on next jokes button
btn.addEventListener('click', fetchJokes);