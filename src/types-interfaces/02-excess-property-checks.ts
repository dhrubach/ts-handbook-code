namespace interface.excessPropertyChecks {

	/*
	*	excess property check when passing an object literal
	*/
	console.log(`****************example 01***************`);
	console.log(``);

	interface ICarModel {
		color?: string;
		year?: number;
	}

	function printCarModel(obj: ICarModel): void {
		console.log(`Model Color: ${obj.color}`);
		console.log(`Model Year: ${obj.year}`);
		console.log(``);
	}

	//printCarModel({ colour: 'white', year: 2015 });  // error due to excess property check

	/*
	*	workarounds -- pass a variable instead of an object literal
	*/
	console.log(`****************example 02***************`);

	let whiteCar = { colour: 'white', year: 2017 };
	printCarModel(whiteCar);

	/*
	* 	workarounds -- define a string index property
	*/
	console.log(`****************example 03***************`);

	interface ILanguage {
		name?: string;
		version?: number;
		[index: string]: any;
	}

	function printLanguageDetails(lg: ILanguage): void {
		console.log(`Language Name: ${lg.name}`);
		console.log(`Language Name: ${lg.version}`);
		console.log(``);
	}

	// NOTE : incorrect 'version' property name
	printLanguageDetails({ name: 'typescript', vrsion: 1.23 });
}
