namespace advancedTypes.indexTypes {

	/*
	*	index types : check for dynamic property names
	*		- index type query operator : keyof
	*		- indexed access operator : T[k]
	*/


	console.log(`****************example 01***************`);
	console.log(``);

	/*
	*	'keyof T' : for a given type 'T', 'keyof T' will return an union of
	*	known, public property names of 'T'
	*/
	function pluck<T, K extends keyof T>(object: T, propNames: K[]): T[K][] {
		return propNames.map(prop => object[prop]);
	}


}
