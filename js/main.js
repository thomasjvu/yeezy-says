//Example fetch using Kanye Rest API
// document.querySelector('button').addEventListener('click', getKanyeQuote)

document.querySelector('button').addEventListener('click', getKanyeQuote)

function getKanyeQuote(){
  const url = `https://api.kanye.rest`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#quote-text').innerText = data.quote
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}