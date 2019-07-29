class stackOfPlates {
	constructor(maxSize) {
		this.maxSize = 3;
		this.stack = [[]];
	}

	push(data) {
		if (this.stack[this.stack.length-1].length >= this.maxSize) {
			this.stack.push([]);
		}
		this.stack[this.stack.length-1].push(data);
	}

	pop() {
		if (this.stack.length > 1 && this.stack[this.stack.length-1].length == 0) {
			this.stack.pop();
		}

		this.stack[this.stack.length-1].pop();
	}

	print() {
		console.log('>-----------------');
		for (let one of this.stack) {
			console.log(one);
		}
		console.log('-----------------<');
	}
}

const plt = new stackOfPlates(3);

plt.push(1);
plt.push(2);
plt.push(3);
plt.push(4);
plt.push(5);
plt.push(6);
plt.push(7);
plt.push(8);
plt.push(9);
plt.push(10);

plt.print();

plt.pop();
plt.print();

plt.pop();
plt.print();

plt.pop();
plt.print();

plt.pop();
plt.print();

plt.pop();
plt.print();

plt.pop();
plt.print();

plt.pop();
plt.pop();
plt.pop();
plt.pop();
plt.pop();
plt.pop();
plt.print();

plt.push(15);
plt.print();
plt.push(16);
plt.push(17);
plt.push(18);
plt.push(19);
plt.print();