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
	console.log(`
		Model Color: ${obj.color}
		Model Year: ${obj.year}
	`);
}

// error due to excess property check
// printCarModel({ colour: 'white', year: 2015 });

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
	console.log(`
		Language Name: ${lg.name}
		Language Name: ${lg.version}
	`);
}

// NOTE : incorrect 'version' property name
printLanguageDetails({ name: 'typescript', vrsion: 1.23 });
