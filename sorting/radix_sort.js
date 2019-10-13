const radix_sort = (list) => {
  
  const getDigit = (numb, size) => {
    console.log(Math.floor(numb/Math.pow(10,size))%10);
    return Math.floor(numb/Math.pow(10,size))%10;
  }
  
  const getMaxPosition = (list) => {
    let size = 0;
    for (var i=0 ; i<list.length ; i++) {
      if ( String(list[i]).length > size ) {
        size = String(list[i]).length;
      }
    }
    return size;
  }

  const maxSize = getMaxPosition(list);

  for (let i=0 ; i<maxSize ; i++) {
    let buckets = Array.from({ length: 10 }, () => [ ])
    for (let j=0 ; j<list.length ; j++) {
      buckets[getDigit(list[j], i)].push(list[j]);
    }
    console.log('buckets:', buckets);
  }

  console.log( 'the max pos is:', getMaxPosition(list) );

  return buckets;
}

const list = [500, 10, 439, 501, 499, 437, 12, 0, 445, 9, 7, 5, 2, 410, 499, 100];

console.log(
  radix_sort(list)
);