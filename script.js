// Add your code to this file
let background = document.querySelector("body");
background.style['background-color'] = 'darkblue';

let footer = document.querySelector('footer');
footer.style['border-style'] = 'solid none solid none';

let heading = document.querySelector('h1');
heading.style['text-decoration'] = 'underline';

let imgBorder = document.getElementById('starters_image_div');
imgBorder.style['border'] = '5px dotted yellow';

let bulbColor = document.getElementById("bulbasaur_container");
bulbColor.style['background-color'] = 'darkgreen';

let pokeNames = document.getElementsByClassName('pokemon_names');
for(let i = 0; i<pokeNames.length; i++){
    pokeNames[i].style['color'] = 'yellow';
    pokeNames[i].innerHTML += '!'
}

let pokeBorder = document.getElementsByClassName('pokemon_images');
for(let a = 0; a < pokeBorder.length; a++){
    pokeBorder[a].style['border'] = '5px dotted yellow';
}

const para = document.createElement('p');

