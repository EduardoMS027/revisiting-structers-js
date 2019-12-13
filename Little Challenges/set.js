function set(arr) {
	let resultArray = [];
	for(let i = 0; i < arr.length; i++)	{
		if(!resultArray.includes(arr[i]))	{
			resultArray.push(arr[i]);
		}
	}
	console.log(resultArray);
	return resultArray;
}

set([1, 3, 3, 5, 5])