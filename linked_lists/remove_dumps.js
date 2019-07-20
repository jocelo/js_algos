const removeDupsObj = require('./node');
const Node = removeDupsObj.Node;
const fnPrint = removeDupsObj.printList;

var a = new Node('f');
var b = new Node('o');
var c = new Node('l');
var d = new Node('l');
var e = new Node('o');
var f = new Node('w');
var g = new Node('u');
var h = new Node('p');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var node = a;
var nodups = {};
var previousNode = null;

while (node) {
	console.log('->', node.value);
	if (nodups[node.value]) {
		previousNode.next = node.next;
	} else {
		previousNode = node;
	}
	nodups[node.value] = true;
	node = node.next;
}
fnPrint(a);