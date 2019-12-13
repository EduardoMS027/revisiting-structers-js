function findNemo(sentence) {
	try	{
		return 'I found Nemo at ' + (sentence.split(' ').indexOf('Nemo') + 1) + '!';
	}	catch	{
		return "I can't find Nemo :(";
	}
}

console.log(findNemo("N e m o is NEMO NeMo Nemo !"));