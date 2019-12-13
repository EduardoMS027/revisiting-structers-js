function toArray(num) {
	return Array.from(String(num), Number);
}

function toNumber(arr) {
	return Number(arr.toString().replace(/,/g, ''));
}