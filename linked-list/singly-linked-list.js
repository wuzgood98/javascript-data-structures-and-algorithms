const log = (...value) => console.log(...value);

class Node {
	value;
	next;
	constructor(value) {
		this.value = value;
		this.next = undefined;
	}
}

class SinglyLinkedList {
	tail;
	head;
	length;
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
		this.head = node;
	}

	append(item) {
		const node = new Node(item);
		this.length++;

		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}

		this.tail.next = node;
		this.tail = node;
	}

	insertAt(item, idx) {
		if (idx < 0 || idx > this.length) {
			throw new Error("Index out of range")
		}
		
		if (idx === this.length) {
			this.append(item);
			return;
		}
		if (idx === 0) {
			this.prepend(item);
			return;
		}

		const node = new Node(item);
		this.length++;

		let curr = this.head;
		let prev = undefined;
		let currentIdx = 0;

		while(curr && currentIdx < idx) {
			prev = curr;
			curr = curr.next;
			currentIdx++;
		}

		node.next = curr;
		prev.next = node;
	}

	get(idx) {
		const curr = this.#getItemAt(idx);

		if (!curr) {
			return undefined;
		}

		return curr.value;
	}

	update(item, idx) {
		const curr = this.#getItemAt(idx);

		if (!curr) {
			return undefined;
		}

		curr.value = item;
		return curr.value;
	}

	remove(item) {
		let curr = this.head;
		while (curr) {
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

	reverse() {
		let curr = this.head;
		let prev = undefined;
		let next = undefined;

		while(curr) {
			next = curr.next;

			curr.next = prev;

			prev = curr;
			curr = next;
		}
		this.head = prev;
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.lenght === 0 || (!this.head && !this.tail);
	}

	print() {
		let curr = this.head, output = "";
		while (curr) {
			output += curr.value + ", "
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
			node.next = undefined;
			return node.value;
		}

		if (node === this.tail) {
			const tailPrev = this.#getItemAt(this.length - 1);
			this.tail = tailPrev;
			if(tailPrev) {
				tailPrev.next = undefined;
			}
			node.next = undefined;
			return node.value;
		}

		let curr = this.head;
		let prev = undefined;
		while (curr) {
			if (node === curr) {
				if (prev) {
					prev.next = curr.next;
				}
				curr.next = undefined;
				return curr.value;
			}
			prev = curr;
			curr = curr.next;
		}

		return undefined;
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
