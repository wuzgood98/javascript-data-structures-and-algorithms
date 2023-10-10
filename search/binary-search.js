function binarySearch(haystack, needle) {
	let lo = 0, hi = haystack.length;

	do {
		const m = Math.floor((lo + hi) / 2);
		const v = haystack[m];

		if (v === needle) {
			return v;
		} else if (v > needle) {
			hi = m - 1;
		} else {
			lo = m + 1;
		}
	} while (lo <= hi);
	return -1;
}
