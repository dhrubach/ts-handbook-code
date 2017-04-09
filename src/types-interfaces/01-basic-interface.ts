/*
 * without an interface
 */
console.log(`****************example 01***************`);

function printScore(serial: { name: string, score: number }): void {
	console.log(`
		Name of the serial : ${serial.name}
		User score : ${serial.score}
	`);
}

let serialObj = {
	name: 'westworld',
	score: 10
};

printScore(serialObj);

/*
 * use an interface to define type
 */
console.log(`****************example 02***************`);

interface IScore {
	name: string;
	score: number;
}

function printScoreWithInterface(serial: IScore): void {
	console.log(`
		Name of the serial : ${serial.name}
  		User Score : ${serial.score}
	`);
}

printScoreWithInterface(serialObj);

const serialOnlyNameObj = {
	name: 'Game Of Thrones'
};

// this call will fail as the input parameter and function argument are not type compatible
// type checker requires a source type to have at least the properties defined in target
// printScoreWithInterface(serialOnlyNameObj);

/*
 * interface with optional parameter
 */
console.log(`****************example 03***************`);

interface ISerial {
	name: string;
	season: number;
	year: number;
	director?: string;
}

function printSerialWithInterface(serial: ISerial): void {
	console.log(`
		Name of the serial : ${serial.name}
  		Season : ${serial.season}
  		Director: ${serial.director}
	`);
}

const gotObj = {
	name: 'Game Of Thrones',
	season: 7,
	year: 2017
};

printSerialWithInterface(gotObj);
