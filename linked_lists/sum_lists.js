const linkedListObj = require('./node');
const Node = linkedListObj.Node;
const fnPrint = linkedListObj.printList;

// check when one of the lists is greater thatn the other
// also check when a new node needs to be created after adding

var onesFirst = new Node(7);
var o11 = new Node(1);
var o12 = new Node(6);

var onesSecond = new Node(5);
var o21 = new Node(9);
var o22 = new Node(2);

// 912
onesFirst.next = o11;
o11.next = o12;

onesSecond.next = o21;
o21.next = o22;

fnPrint(onesFirst);
console.log(' + ');
fnPrint(onesSecond);
console.log(' = ');

var node = onesFirst;
var nodeLeft = onesFirst;
var nodeRight = onesSecond;
var resultList = null;
var resultHead = null;
var carrierValue = 0;

while(nodeLeft) {
	let addTmp = nodeLeft.value + nodeRight.value + carrierValue;

	if (addTmp >= 10) {
		addTmp -= 10;
		carrierValue = 1;
	} else {
		carrierValue = 0;
	}
	// resultList.value = addTmp;

	if (!resultHead) {
		resultList = new Node(addTmp);
		resultHead = resultList;
	} else {
		resultList.next = new Node(addTmp);
		resultList = resultList.next;
	}

	nodeLeft = nodeLeft.next;
	nodeRight = nodeRight.next;
	
	//node = node.next;
}

var stack = [];
nodeLeft = onesFirst;
nodeRight = onesSecond;

while(nodeLeft) {
	let addTmp = nodeLeft.value + nodeRight.value;

	stack.unshift(addTmp);

	nodeLeft = nodeLeft.next;
	nodeRight = nodeRight.next;
	
	//node = node.next;
}

for(let i of stack) {
	const yy = i;
	console.log('yy', i);
}

console.log('stack', stack);



fnPrint(resultHead);