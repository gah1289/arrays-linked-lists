/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length = 1;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
			this.length++;
		}
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			this.length = 1;
		}
		else {
			newNode.next = this.head;
			this.head = newNode;
			this.length++;
		}
	}

	/** pop(): return & remove last item. */

	pop() {
		const poppedNode = this.tail;
		let currentNode = this.head;
		let newTail = this.head;

		while (currentNode.next) {
			newTail = currentNode;
			currentNode = currentNode.next;
		}
		newTail.next = null;
		this.tail = newTail;
		this.length--;

		if (!this.length) {
			(this.head = null), (this.tail = null);
		}

		return poppedNode.val;
	}

	/** shift(): return & remove first item. */

	shift() {
		const shiftedNode = this.head;
		if (this.length > 1) {
			let newHead = this.head.next;
			this.head = newHead;
			this.length--;
			return shiftedNode.val;
		}
		else if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return shiftedNode.val;
		}

		if (!this.length) {
			(this.head = null), (this.tail = null);
		}
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		let currentNode = this.head;
		let nodeIndex = 0;
		while (nodeIndex !== idx) {
			currentNode = currentNode.next;
			nodeIndex++;
		}
		return currentNode.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		let currentNode = this.head;

		let nodeIndex = 0;
		if (idx === 0) {
			this.head.val = val;
		}

		while (nodeIndex !== idx && currentNode.next !== null) {
			currentNode = currentNode.next;
			nodeIndex++;
		}

		currentNode.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		let currentNode = this.head;
		let newNode = new Node(val);
		let previousNode;
		let nodeIndex = 0;
		if (idx === 0) {
			return this.unshift(val);
		}
		if (idx === this.length) return this.push(val);

		while (nodeIndex !== idx) {
			console.log(nodeIndex, idx, currentNode);
			if (nodeIndex === idx - 1) {
				previousNode = currentNode;
			}
			currentNode = currentNode.next;
			nodeIndex++;
		}
		newNode.next = currentNode;
		previousNode.next = newNode;
		this.length += 1;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		let currentNode = this.head;
		let removedNode;
		let previousNode;
		let nodeIndex = 0;
		if (idx === 0) {
			return this.shift();
		}
		if (idx === this.length) {
			return this.pop();
		}
		while (nodeIndex !== idx) {
			currentNode = currentNode.next;
			nodeIndex++;
			if (nodeIndex === idx - 1) {
				previousNode = currentNode;
			}
		}
		removedNode = currentNode.next;
		previousNode.next = currentNode.next.next;
		return removedNode;
	}
	/** average(): return an average of all values in the list */

	average() {
		let total = 0;
		let currentNode = this.head;
		if (this.length === 0) return 0;
		while (currentNode) {
			total += currentNode.val;
			currentNode = currentNode.next;
		}

		return total / this.length;
	}
}

module.exports = LinkedList;
