class twoStacks {
	constructor() {
		this.sta = [];
		this.stb = [];
	}

	push(data) {
		if (this.sta.length == 0) {
			this.sta.push(data);
			this.moveAllElements(this.stb, this.sta);
		} else {
			this.stb.push(data);
			this.moveAllElements(this.sta, this.stb);
		}
	}

	pop() {
		if (this.sta.length == 0) {
			let elm = this.stb.pop();
			while(elm) {
				if (this.stb.length == 0) {
					return elm;
				}
				this.sta.push(elm);
				elm = this.stb.pop();
			}
		} else {
			let elm = this.sta.pop();
			while(elm) {
				if (this.sta.length == 0) {
					return elm;
				}
				this.stb.push(elm);
				elm = this.sta.pop();
			}
		}
	}

	moveAllElements(fromStack, toStack) {
		
		let element = fromStack.pop();
		while (element) {
			toStack.push(element);
			element = fromStack.pop();
		}
	}

	print() {
		console.log('stack A');
		console.log(this.sta);
		console.log('stack B', this.stb);
	}
}

const ts = new twoStacks();

ts.push(1);
ts.push(2);
ts.push(3);
ts.push(4);
ts.push(5);
ts.print();

console.log( ts.pop() );
console.log( ts.pop() );
console.log( ts.pop() );
console.log( ts.pop() );
console.log( ts.pop() );