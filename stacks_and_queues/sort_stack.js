class SortTwoStacks {
	constructor(os) {
		this.originalStack = os;
		this.tmpStack = [];
	}

	peek() {
		return this.originalStack[this.originalStack.length-1];
	}

	isEmpty(list) {
		return list.length > 0;
	}

	sort() {
		var valueToInsert = this.originalStack.pop();
		console.log('we are looking to insert this one:', valueToInsert);
		while( !this.isEmpty(this.originalStack) ) {
			console.log();
			if () {
				
			}
		}
	}


}

const stack = [8,10,3,5,2,9,7];
const ts = new SortTwoStacks(stack);

ts.sort(stack);