console.log("Hello world");

/* Consegna:
- Data una lista della spesa, 
- stampare sulla pagina gli elementi della lista individualmente con un ciclo while.

##Tools
- array
- print
- while

*/

//Create an array that contains items

const shoppingList = [
    'Crocchette per Koi e Tora',
    'lettiera',
    'latte avena',
    'avena',
    'cioccolato fondente',
    'yogurt',
    'tè',
    'quaderno',
];
console.log(shoppingList);

//Enunciate the element in DOM
let ulDOM = document.querySelector('.list');
//console.log(ulistDOM);

let i = 0;
//use while to create loop
while (i < shoppingList.length) {
    const products = shoppingList[i];
    console.log(products);

    let listItem = `<li>${products}</li>`;

    ulDOM.insertAdjacentHTML('beforeend', listItem);


    i++
}

