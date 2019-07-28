//

const removeDupsObj = require('./node'),
	Node = removeDupsObj.Node,
	length = removeDupsObj.len,
	fnPrint = removeDupsObj.printList;

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);
var f = new Node(6);
var g = new Node(7);
var h = new Node(8);
var i = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

var j = new Node('x');
var k = new Node('b');
var l = new Node(7);
var m = new Node(8);
var n = new Node(9);

j.next = k;
k.next = g;
l.next = h;
m.next = i;

function intersection(left, right) {
	var headLeft = left,
		headRight = right;

	var sizeLeft = length(left),
		sizeRight = length(right);

	if (sizeLeft !== sizeRight) {
		const diff = Math.abs(sizeLeft-sizeRight);
		if (sizeLeft-sizeRight > 0) {
			for (let s=1 ; s<=diff ; s++ ) {
				headLeft = headLeft.next;
			}
		} else {
			for (let s=1 ; s<=diff ; s++ ) {
				headRight = headRight.next;
			}
		}
	}

	// meat of the algo
	while (headLeft) {
		if (headLeft === headRight) {
			return headLeft;
		}
		headLeft = headLeft.next;
		headRight = headRight.next;
	}
	return false;
}

console.log( 
intersection(a, j)
)