export function truncateStr(string, length) {
	if (typeof string !== "string") {
		throw new Error("First argument must be a string");
	}
	if (typeof length !== "number") {
		throw new Error("Second argument must be a number");
	}

	return string.length > length ? string.substr(0, length) + "..." : string;
}
