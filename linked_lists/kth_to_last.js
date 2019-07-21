const removeDupsObj = require('./node');
const Node = removeDupsObj.Node;
const fnPrint = removeDupsObj.printList;

// [a,b,c,d,e,f,g]
// find 2nd to last = f

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
var h = new Node('h');
var i = new Node('i');
var j = new Node('j');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;

var pointer1,
	pointer2;

findKthToLast_iter = function(k, node) {
	var size = 0;
	var pointer2 = node;

	while (node.next) { size++; node = node.next; };
	var fromEnd = size - k;
	console.log('size', size);
	console.log('from end', fromEnd);

	for (var i=0 ; i<fromEnd ; i++) {
		pointer2 = pointer2.next;
	}

	console.log(`element ${k} from last is: ${pointer2.value}`);

}

var node = a;
var kthtolast = 3;

findKthToLast_iter(kthtolast, node)

/*
var findKthToLast_rec = function(k, head) {
  // do recursively
  if (head === null || k < 1) {
    return;
  } else if (k === 1) {
    console.log('=', head.value);
    findKthToLast_rec(k, head.next);
  } else {
    findKthToLast_rec(k-1, head.next);
  }
};

findKthToLast_rec(2, node);
*/