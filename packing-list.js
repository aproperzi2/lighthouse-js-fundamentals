const packingList = ['bowls', 'plates', 'pots', 'pans', 'eating utensils', 'glasses', 'cups', 'cooking utensils'];

console.log('Kitchen stuff to pack:');

// setting a counter variable makes it east to iterate through an array 
  // for (let i = 0; i < packingList.length; i++) {
  //   console.log(packingList[i]);
    // }


// using while loop to iterate through array
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}