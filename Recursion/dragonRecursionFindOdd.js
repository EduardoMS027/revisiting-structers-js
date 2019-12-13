// [2, 4, 6, 8, 10]
function dragonRecursionFindOdd(arr)	{
	if(arr.length === 0)	{
		console.log(`Don't find any odd`);
		return;
	}
	if(arr[0] % 2 === 0)	{
		//console.log(arr[0]);
		arr.splice(arr.indexOf(arr[0]), 1);
		dragonRecursionFindOdd(arr);
	}	else	{
		console.log(`The first odd find was ${arr[0]}`);
		return;
	}
}

console.log(dragonRecursionFindOdd([2, 4, 6, 8, 10]));