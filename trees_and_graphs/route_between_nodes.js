const treeObj = require('./tree');
const Node = treeObj.Node;

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
const i = new Node('i');
const j = new Node('j');

a.addEdge(b);
a.addEdge(c);
a.addEdge(d);

c.addEdge(e);
c.addEdge(f);

f.addEdge(g);

h.addEdge(i);
h.addEdge(j);

function areConnected(nodeA, nodeB) {
	var queue = [];

	queue.push(nodeA);
	while (queue.length != 0) {
		var currNode = queue.shift();
		if (currNode.children) {
			currNode.children.map((child)=>{
				queue.push(child);
			});
		}

		if (nodeB == currNode) {
			return true;
		}
	}
}

console.log('are they?', areConnected(h, j) );