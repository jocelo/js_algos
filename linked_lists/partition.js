const removeDupsObj = require('./node');
const Node = removeDupsObj.Node;
const fnPrint = removeDupsObj.printList;

var a = new Node(3);
var b = new Node(5);
var c = new Node(1);
var d = new Node(8);
var e = new Node(10);
var f = new Node(2);
var g = new Node(5);
var h = new Node(4);
var i = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

fnPrint(a);
var lowList,
	highList,
	lowHead,
	highHead,
	node = a,
	partitionValue = 5;

while (node) {
	let next = node.next;
	node.next = null;

	if (node.value < partitionValue) {
		if (!lowList) {
			lowList = node;
			lowHead = lowList;
		} else {
			lowList.next = node;
			lowList = node;
		}
	} else {
		if (!highList){
			highList = node;
			highHead = highList;
		} else {
			highList.next = node;
			highList = node;
		}
	}
	node = next;
	i++;
}

lowList.next = highHead;

fnPrint(lowHead);