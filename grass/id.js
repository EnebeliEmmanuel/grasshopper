// event listener runs a callback function when a specific event occurs.

// In this case, the event listener is activated by the 'click' event.

// When the button is clicked, the callback function will change the text content of the button.

// let pic1 = '../../static/images/poolPup.jpg';
// let pic2 = '../../static/images/giraffe.jpg';
// let img = document.getElementById('pic');

// button1.addEventListener('click', () => {
//     img.src = pic1;
// });

// button2.addEventListener('click', () => {
//     img.src = pic2;
// });


// The createElement method takes a tag name (as a string) and creates a new HTML element by returning a start and end tag for it.
let newSubHeading = document.createElement('h2');
newSubHeading.textContent = 'A new heading';
console.log(newSubHeading.textContent);
let newParagraph = document.createElement('p');
newParagraph.textContent = 'this is quite cool'
console.log(newParagraph.textContent);


// The appendChild method adds an HTML element as a "child" of another element.

let title = document.createElement('h1');
title.textContent = 'Cool Cat';

let picture = document.createElement('img');
picture.src = '../../static/images/catStretching.jpg';

let description = document.createElement('p');
description.textContent = 'Thank you cat, very cool!';
document.body.appendChild(title);
document.body.appendChild(picture);
document.body.appendChild(description);


import { pictures } from 'animalPics.data';

for (let picture of pictures) {
    let img = document.createElement('img');
    img.src = picture;
    
    document.body.appendChild(img);
    let button = document.createElement('button');
    button.textContent = 'cool button';
    document.body.appendChild(button)
}


import { animals } from 'animalShelter.data';

let title = document.createElement('h1');
title.textContent = 'Adoptable Animals';
document.body.appendChild(title);

for(let animal of animals){
    let animalName = document.createElement('h2');
    animalName.textContent = animal[0];
    document.body.appendChild(animalName);
}


import { animals } from 'animalShelter.data';

let title = document.createElement('h1');
title.textContent = 'Adoptable Animals';
document.body.appendChild(title);

for (let animal of animals) {
  
    let animalName = document.createElement('h2');
    animalName.textContent = animal[0];
    document.body.appendChild(animalName);
    
    let picture = document.createElement('img');
    picture.src = animal[1];
    document.body.appendChild(picture);
    
    let description = document.createElement('p');
    description.textContent = animal[2];
    document.body.appendChild(description);
    
    let button = document.createElement('button');
    button.textContent = 'like';
    document.body.appendChild(button);
}

import { animals } from 'animalShelter.data';

let title = document.createElement('h1');
title.textContent = 'Adoptable Animals';
document.body.appendChild(title);

for (let animal of animals) {
    
    let animalName = document.createElement('h2');
    animalName.textContent = animal[0];
    document.body.appendChild(animalName);
    
    let picture = document.createElement('img');
    picture.src = animal[1];
    document.body.appendChild(picture);
    
    let description = document.createElement('p');
    description.textContent = animal[2];
    document.body.appendChild(description);
    
    let button = document.createElement('button');
    button.textContent = 'Like';
    document.body.appendChild(button);
    button.addEventListener('click', () => {
        if (button.textContent === 'Like'){
            button.textContent = 'Liked!';
        } else {
        button.textContent = 'Like';
        }
})
}