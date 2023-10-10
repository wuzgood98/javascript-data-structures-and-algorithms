const log = (...output) => console.log(...output);

class Node {
	value;
	next;
	constructor(value) {
		this.value = value;
		this.next = undefined;
	}
}

class Queue {
	length;
	head;
	tail;
	constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
	}

	enqueue(item) {
		const node = new Node(item);
		this.length++;

		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}

		this.tail.next = node;
		this.tail = node;
	}

	dequeue() {
		if (this.isEmpty()) {
			const out = this.head?.value;
			this.head = this.tail = undefined;
			return out;
		}

		this.length--;

		const curr = this.head;
		this.head = this.head.next;
		curr.next = undefined;

		return curr.value;
	}

	isEmpty() {
		return this.length === 0 || (!this.head && !this.tail);
	}

	peek() {
		return this.head?.value;
	}

	size() {
		return this.length;
	}

	print() {
		let curr = this.head, output = '';
		while (curr) {
			output += curr.value + ', ';
			curr = curr.next;
		}
		log(output.trim().slice(0, -1));
	}
}
