const log = (...value) => console.log(...value);

class Node {
	value;
	prev;
	next;
	constructor(value) {
		this.value = value;
		this.prev = undefined;
		this.next = undefined;
	}
}

class DoublyLinkedList {
	length;
	head;
	tail;
	constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
	}

	prepend(item) {
		const node = new Node(item);
		this.length++;

		if (!this.head) {
			this.head = this.tail = node;
			return;
		}

		node.next = this.head;
		this.head.prev = node;
		this.head = node;
	}

	append(item) {
		const node = new Node(item);
		this.length++;

		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}

		node.prev = this.tail;
		this.tail.next = node;
		this.tail = node;
	}

	insertAt(item, idx) {
		const node = new Node(item);
		if (this.isEmpty()) {
			this.head = this.tail = node;
			this.length++;
			return;
		}

		if (idx === this.length) {
			this.append(item);
			return;
		}

		if (idx === 0) {
			this.prepend(item);
			return;
		}

		const curr = this.#getItemAt(idx);

		if (!curr) {
			return undefined;
		}

		this.length++;

		node.next = curr;
		node.prev = curr.prev;
		curr.prev = node;

		if (node.prev) {
			node.prev.next = node;
		}
	}

	remove(item) {
		let curr = this.head;
		while(curr) {
			if (curr.value === item) {
				return this.#removeNode(curr);
			}
			curr = curr.next;
		}
		return undefined;
	}

	removeAt(idx) {
		const curr = this.#getItemAt(idx);

		if (!curr) {
			return undefined;
		}

		return this.#removeNode(curr);
	}

	update(item, idx) {
		const curr = this.#getItemAt(idx);

		if (!curr) {
			return undefined;
		}

		curr.value = item;
		return curr.value;
	}

	get(idx) {
		const curr = this.#getItemAt(idx);

		if (!curr) {
			return undefined;
		}

		return curr.value;
	}

	reverse() {
		let curr = this.head;
		let prev = undefined;
		let next = undefined;

		while (curr) {
			next = curr.next;

			curr.next = prev;
			curr.prev = next;

			prev = curr;
			curr = next;
		}
		this.head = prev;
	}

	isEmpty() {
		return this.length === 0 || (!this.head && !this.tail);
	}

	size() {
		return this.length;
	}

	print() {
		let curr = this.head, output = "";
		while (curr) {
			output += curr.value + ", ";
			curr = curr.next;
		}
		log(output.trim().slice(0, -1));
	}

	#removeNode(node) {
		if (this.isEmpty()) {
			const out = this.head?.value;
			this.head = this.tail = undefined;
			return out;
		}

		this.length--;

		if (node === this.head) {
			this.head = node.next;
		}

		if (node === this.tail) {
			this.tail = node.prev;
		}

		if (node.prev) {
			node.prev.next = node.next;
		}

		if (node.next) {
			node.next.prev = node.prev;
		}

		node.prev = node.next = undefined;
		return node.value;
	}

	#getItemAt(idx) {
		if (idx < 0 || idx > this.length) {
			throw new Error("Index out of range");
		}

		let curr = this.head;
		for (let i = 0; curr && i < idx; ++i) {
			curr = curr.next;
		}
		return curr;
	}
}
