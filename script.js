const jokeDiv = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', generateJoke)


// fetchData realiza la petición HTTP
function fetchData(url, config) {
    return fetch(url, config)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json(); // o response.text() para obtenerlo como texto
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log(error);
      });
  }


async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };

    try {
        const data = await fetchData('https://icanhazdadjoke.com', config);
      
        console.log(data);
        jokeDiv.innerHTML = data.joke;
 
      } catch (error) {
        console.log(error);
      }
    
}




// // USING ASYNC/AWAIT
// async function generateJoke() {
//   const config = {
//     headers: {
//       Accept: '',
//     },
//   }

//   const res = await ('', config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke
// }

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }