const log = (...output) => console.log(...output);

class Node {
	value;
	prev;
	constructor(value) {
		this.value = value;
		this.prev = undefined;
	}
}

class Stack {
	length;
	head;
	constructor() {
		this.head = undefined;
		this.length = 0;
	}

	push(item) {
		const node = new Node(item);
		this.length++;

		if (!this.head) {
			this.head = node;
			return;
		}

		node.prev = this.head
		this.head  = node;
	}

	pop() {
		if (this.isEmpty()) {
			const out = this.head?.value;
			this.head = undefined;
			return out;
		}

		this.length--;

		const head = this.head;
		this.head = this.head.prev;
		head.prev = undefined;

		return head.value;
	}

	peek() {
		return this.head?.value;
	}

	isEmpty() {
		return this.length === 0 || !this.head;
	}

	size() {
		return this.length;
	}

	print() {
		let curr = this.head, output = '';
		while(curr) {
			output += curr.value + ', ';
			curr = curr.prev;
		}
		log(output.trim().slice(0, -1));
	}
}
