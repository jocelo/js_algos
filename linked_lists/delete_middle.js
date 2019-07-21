const removeDupsObj = require('./node');
const Node = removeDupsObj.Node;
const fnPrint = removeDupsObj.printList;

var m = new Node('m');
var n = new Node('n');
var o = new Node('o');
var p = new Node('p');
var q = new Node('q');

m.next = n;
n.next = o;
o.next = p;
p.next = q;

var nodeToRemove = n;

removeMidNode = function(node) {
	if (node.next) {
		node.value = node.next.value;
		node.next = node.next.next;
	}
}

fnPrint(m);
removeMidNode(nodeToRemove);
fnPrint(m);