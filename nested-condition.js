var danishPrice = 50;
var butterban = 20;
var toastBiscuit = 10;
var myBudget = 60;
var packedwell = false;

// if (danishPrice < myBudget) {
//     console.log('Danish kheye danish jabo');
// }
// else if (butterban < myBudget) {
//     console.log('Butter bon diye cha khabo');
// }
// else if (toastBiscuit < myBudget || toastBiscuit == myBudget) {
//     console.log('Cha diya toast khamu');
// }
// else {
//     console.log('batasha diya hawa khamu');
// }

if (danishPrice < myBudget) {
    if (packedwell == true) {
        console.log('danish khamu')
    }
    else {
        console.log('danish khamu na')
    }
}
else {
    console.log('dhur...!! khamui na baal kisu')
}