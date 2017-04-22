console.log(`****************example 01***************`);

class Proposal {
	constructor(
		public name: string,
		public id: number,
		public amount: number) { }
}

class Owner {
	constructor(
		public name: string,
		public dob: string ) { }
}

function combine<T, U>(first: T, second: U): T & U {
	let result = <T & U> { };

	for (let prop in first) {
		if (first.hasOwnProperty(prop)) {
			(<any> result)[prop] = (<any> first)[prop];
		}
	}

	for (let prop in second) {
		if (!result.hasOwnProperty(prop)) {
			(<any> result)[prop] = (<any> second)[prop];
		}
	}

	return result;
}

function displayDetails(combinedObject: Proposal & Owner): void {
	console.log(`
		Type of combined type : ${typeof combinedObject}
		Name of the proposal : ${combinedObject.name}
		Date of Birth : ${combinedObject.dob}
	`);
}

const proposal = new Proposal('prop-test-intersection', 12345, 900000);
const account = new Owner('John', '01/01/1970');

// type inference
let combinedType = combine(proposal, account);
displayDetails(combinedType);

// reversing the order of the combined types
combinedType = combine(account, proposal);
// note the value of combinedType.name
displayDetails(combinedType);

export { Proposal, Owner };
