type MAP = {
	<T, U>(array: T[], callbackFn: (item: T) => T): U[];
};

const map: MAP = (array, callbackFn) => {
	let resultArr = [];

	if (array.length === 0) {
		return array;
	}

	for (let i = 0; i < array.length; i++) {
		resultArr[i] = callbackFn(array[i]);
	}

	return resultArr;
};

const arr = [1, 4, 9, 16];

// @ts-ignore
console.log(map(arr, (x) => x.toString()));
