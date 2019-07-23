const linkedListObj = require('./node');
const Node = linkedListObj.Node;
const fnPrint = linkedListObj.printList;

// check if a list is a palindrome

var a = new Node('n'),
	b = new Node('u'),
	c = new Node('r'),
	d = new Node('s'),
	e = new Node('e'),
	f = new Node('s'),
	g = new Node('r'),
	h = new Node('u'),
	i = new Node('n');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

var head = a,
	fast = a,
	slow = a,
	stack = [];
console.log('slow', slow, fast);

while(fast) {
	console.log(' + ', fast.value);
	console.log(' - ', slow.value);
	stack.push(slow.value);
	if (!fast.next) {
		break;
	}
	fast = fast.next.next;	
	slow = slow.next;
}

console.log('fast ', fast);
console.log('slow ', slow);
console.log('stack', stack);
var isPalindrome = true;

while(slow) {
	let current = stack.pop();
	console.log(`comparing ${slow.value} vs ${current}`);
	if (slow.value !== current) {
		isPalindrome = false;
		break;
	}
	slow = slow.next;
}


console.log('so... is it? ', isPalindrome);
