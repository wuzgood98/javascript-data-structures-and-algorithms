function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	const pivot = arr[0];
	const left = [];
	const right = [];

	for (let i = 1; i < arr.length; ++i) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
}

// Using partition

function qs(arr, lo, hi) {
	if (lo >= hi) {
		return;
	}

	const pivotIdx = partition(arr, lo, hi);

	qs(arr, pivotIdx + 1, hi);
	qs(arr, lo, pivotIdx - 1);
}

function partition(arr, lo, hi) {
	let idx = lo - 1;
	let pivot = arr[hi];

	for (let i = lo; i < hi; ++i) {
		if (arr[i] < pivot) {
			idx++;
			const tmp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = tmp;
		}
	}

	idx++;
	arr[hi] = arr[idx];
	arr[idx] = pivot;

	return idx;
}

function quick_sort(arr) {
	qs(arr, 0, arr.length - 1);
	return arr;
}
