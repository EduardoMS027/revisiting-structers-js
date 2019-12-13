function joinPath(portion1, portion2) {
	let lstPortion1 = portion1.split('');
	let lstPortion2 = portion2.split('');
	
	if(verifyChar(lstPortion1) && verifyChar(lstPortion2))	{
		lstPortion2.splice(lstPortion2.indexOf('/'), 1);
			 return lstPortion1.join('') + lstPortion2.join('');
	}	else{
		 return lstPortion1.join('') + lstPortion2.join('');
	}
	/*
	if(verifyChar(lstPortion1) && !verifyChar(lstPortion2))	{
		//lstPortion2.splice(lstPortion2.indexOf('/'), 1);
			 return lstPortion1.join('') + lstPortion2.join('');
	}	
	if(!verifyChar(lstPortion1) && verifyChar(lstPortion2))	{
		return lstPortion1.join('') + lstPortion2.join('');
	}
	*/
	
}

function verifyChar(array)	{
	if(array.indexOf('/') === -1)	{
			return false;
	}
	return true;
}