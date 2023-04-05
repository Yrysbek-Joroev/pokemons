let div = document.querySelector('#app')
let card = document.createElement('div')

let pokemonsInfo = document.createElement('div')
fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()).then(data => {
  data.results.forEach((elem, index) => {
    pokemonsInfo.innerHTML += `
    <button onclick="showInfo(${index})">${elem.name}</button>
    `
    div.appendChild(pokemonsInfo)
  })
})

async function showInfo(index) {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}/`)
  let data = await res.json()
  card.innerHTML = `
    <img src ="${data.sprites.front_default}">
    <h2>${data.name}</h2>
    <p>${data.types[0].type.name}</p>
    <p>${data.weight}</p>
    <p>${data.height}</p>
    `
}
div.after(card)