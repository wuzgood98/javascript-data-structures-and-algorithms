/**
 * linearSearch - searchs and returns the index of the found item.
 * haystack: list of data to search.
 * needle: item to search.
 *
 * Return: the index of the found item, otherwise -1.
 */
function linearSearch(haystack, needle) {
	for (let i = 0; i < haystack.length; ++i) {
		if (haystack[i] === needle) {
			return i;
		}
	}
	return -1;
}
