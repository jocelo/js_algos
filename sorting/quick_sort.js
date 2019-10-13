const merge = (leftList, rightList) => {
  const newList = [];

  let leftIdx = 0,
    rightIdx = 0;
  
  while (leftIdx<leftList.length && rightIdx<rightList.length) {
    let nextElm;
    if (leftList[leftIdx] <= rightList[rightIdx]) {
      nextElm = leftList[leftIdx];
      leftIdx++;
    } else {
      nextElm = rightList[rightIdx];
      rightIdx++;
    }
    newList.push(nextElm);
  }

  return newList.concat(leftList.slice(leftIdx)).concat(rightList.slice(rightIdx));
}

const merge_sort = (list) => {

  const newArr = [];
  if (list.length <= 1) {
    return list;
  }
  const mid = Math.floor(list.length/2);

  return merge(merge_sort(list.slice(0, mid)), merge_sort(list.slice(mid)));
}

let sample = [10, -1, 2, 5, 0, 6, 4, -5];
//sample = [1, 5, 2, 3];

console.log(
  'original', sample
)

console.log(
  'sorted', merge_sort(sample)
)