// variables
var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.push('letter');
items.push('watch');
items.pop();

// conditionals
if (items.length >= 4) {
    console.log('u have too many elemnets');
}
else if (items.length == 4) {
    console.log('u only have 4 items');
}
else {
    console.log('wow..! u have a clean desk');
}