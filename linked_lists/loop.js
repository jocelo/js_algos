const removeDupsObj = require('./node');
const Node = removeDupsObj.Node;
const fnPrint = removeDupsObj.printList;

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);
var f = new Node(6);
var g = new Node(7);
var h = new Node(8);
var i = new Node(9);
var j = new Node(10);
var k = new Node(11);
var l = new Node(12);
var m = new Node(13);
var n = new Node(14);
var o = new Node(15);
var p = new Node(16);


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = c;

i.next = j;
j.next = k;
k.next = l;
l.next = m;
m.next = n;
n.next = o;
o.next = p;
p.next = h;

let keepLooping = true;

let slow = a,
	fast = a;

while (keepLooping) {
	// console.log(' [s] =>', slow.value);
	// console.log(' F =>', fast.value);

	if (fast && fast.next && fast.next.next) {
		fast = fast.next.next;
	}
	slow = slow.next;

	if (!slow) {
		keepLooping = false;
	}

	if (slow == fast) {
		keepLooping = false;
	}
}

var head = a;
going = true;

while (going) {
	head = head.next;
	slow = slow.next;

	if (head === slow) {
		going = false;
	}
}

console.log('this is the start of the loop:', head);