const Node = function(value) {
	this.value = value;
	this.next = null;
}

const listLength = function(list) {
	var size = 0;
	while(list) {
		list = list.next;
		size++;
	}
	return size;
}

const printList = function(node) {
	var head = node;
	var keepGoing = true;
	var values = '';
	while (keepGoing) {
		if (head.next == null) {
			keepGoing = false;
		}
		values += `${head.value} `;
		head = head.next;
	}
	console.log(`=> ${values}`);
}

module.exports = {
	Node: Node,
	printList: printList,
	len: listLength
};