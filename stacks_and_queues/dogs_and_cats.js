const removeDupsObj = require('../linked_lists/node');
const Node = removeDupsObj.Node;

class AnimalShelter {
	constructor() {
		this.dogsHead = null;
		this.dogsTail = null;
		this.catsHead = null;
		this.catsTail = null;
		this.id = 0;
	}

	enqueue(animal) {
		let timeStamp = new Date();
		//console.log('stamp', timeStamp.getTime());
		if (animal.type == 'cat') {
			if (!this.catsHead) {
				this.catsTail = new Node({key: this.id++, name:animal.name});
				this.catsHead = this.catsTail;
			} else {
				this.tmpNode = new Node({key: this.id++, name:animal.name})
				this.catsTail.next = this.tmpNode;
				this.catsTail = this.tmpNode;
			}
			return;
		}
		if (animal.type == 'dog') {
			if (!this.dogsHead) {
				this.dogsTail = new Node({key: this.id++, name:animal.name});
				this.dogsHead = this.dogsTail;
			} else {
				this.tmpNode = new Node({key: this.id++, name:animal.name})
				this.dogsTail.next = this.tmpNode;
				this.dogsTail = this.tmpNode;
			}
			return;
		}
	}

	dequeueAny() {
		if (this.dogsHead.value.key < this.catsHead.value.key) {
			return this.dequeueDog();
		} else {
			return this.dequeueCat();
		}
	}

	dequeueCat() {
		const whoToDequeue = this.catsHead;
		this.catsHead = this.catsHead.next;
		console.log('this was pulled:', whoToDequeue.value.name);
		return whoToDequeue;
	}

	dequeueDog() {
		const whoToDequeue = this.dogsHead;
		this.dogsHead = this.dogsHead.next;
		console.log('this was pulled:', whoToDequeue.value.name);
		return whoToDequeue;
	}

	printEmAll() {
		let dogs = this.dogsHead;
		console.log('===== DoGS');
		while(dogs) {
			console.log(dogs.value.key,'>', dogs.value.name);
			dogs = dogs.next;
		}

		console.log('===== CaTS');
		let cats = this.catsHead;
		while(cats) {
			console.log(cats.value.key,'>', cats.value.name);
			cats = cats.next;
		}
	}
}
/*
const as = new AnimalShelter();
as.enqueue({type: 'cat', name: 'yotta'})
as.enqueue({type: 'dog', name: 'yoshi'})
as.enqueue({type: 'cat', name: 'garfield'})
as.enqueue({type: 'dog', name: 'canela'})
as.enqueue({type: 'cat', name: 'jebastian'})
as.enqueue({type: 'dog', name: 'oddie'})
as.enqueue({type: 'dog', name: 'larry'})
as.printEmAll()

as.dequeueAny();
as.dequeueAny();
as.dequeueAny();

as.enqueue({type: 'cat', name: 'don gato'})
as.enqueue({type: 'cat', name: 'benito'})
as.enqueue({type: 'cat', name: 'pandilla'})
as.enqueue({type: 'dog', name: 'firulais'})
as.enqueue({type: 'dog', name: 'grenias'})

as.printEmAll()

as.dequeueDog();
*/