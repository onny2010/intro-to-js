var tableLength = 12;
var tourDestinations = ['coxs bazar', 'saint-martin', 'rangamati', 'bandarban', 'tanguar haor'];

tourDestinations.indexOf('tanguar haor');

var fourthDestination = tourDestinations[3];
tourDestinations[0] = 'sylhet';

tourDestinations.push('N.gonj');
tourDestinations.pop();

if (tourDestinations[1] == 'b.baria') {
    console.log('pahare ahare ahare');
}
else if (tourDestinations[1] == 'china') {
    console.log('china, tor kase jaina');
}
else if (tourDestinations.length == 4) {
    console.log('aro taka ase aro ghurmu');
}
else {
    console.log('dhur baal... kothao jamu na....!!!');
}

var eggPrice = 42;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami dim khamu');
}

if (eggPrice > myBudget) {
    console.log('lebu diye vat khabi')
}