getHalfy = (numb) => {
  console.log('this is supposed to run just once');
  return Math.floor(numb.length/2);
}

magic_number = (numbers, halfIndex = getHalfy(numbers)) => {
  console.log('looking on this new one:', halfIndex);

  if (numbers[halfIndex] == halfIndex) {
    return halfIndex;
  }

  if (halfIndex == 0 || halfIndex > numbers.length) {
    return false;
  }

  console.log('halfIndex', halfIndex);
  console.log('numbers[halfIndex]', numbers[halfIndex]);
  if (halfIndex < numbers[halfIndex]) {
    console.log('move to the left', Math.floor(halfIndex/2));
    return magic_number(numbers, Math.floor(halfIndex/2));
  } else {
    console.log(' >> ', halfIndex+Math.floor(halfIndex/2));
    return magic_number(numbers, halfIndex+Math.floor(halfIndex/2));
  }
}


console.log( 
  magic_number([-9, -5, -2, 0, 2, 3, 4, 5, 6, 7, 9, 10, 12, 26 ])
  ,' should be 7'
);