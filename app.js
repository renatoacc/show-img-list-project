let counter = 1

function render(){
    let container = document.getElementById('pokemon')
    container.innerHTML = `<img class='container' src="https://tinyurl.com/ironhack-pokemons/${counter}.svg">`
    let show = document.getElementById('show')
    show.innerHTML = `<p class='counter'>${counter} / 650</p>`
}

let prev = document.getElementById('prev')
let next = document.getElementById('next')


prev.onclick = function(){
    if (counter > 1){
        counter -= 1
        render()
    }
}

next.onclick = function(){
    if(counter < 650){
        counter += 1
        render()
    }
}

render()