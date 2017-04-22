/*
*	index types : check for dynamic property names
*		- index type query operator : keyof T
*		- indexed access operator : T[k]
*/
console.log(`****************example 01***************`);

interface IAddress {
	house: string;
	flat: number;
	street: string;
	city: string;
}

const address: IAddress = {
	city: 'warren',
	flat: 100,
	house: 'eden',
	street: 'mango lane' };

/*
 * 'keyof T' : for a given type 'T', 'keyof T' will return an union of
 * known, public property names of 'T'
 *
 * hover over 'addressProperties' to check the underlying type
 */
let addressProperties: keyof IAddress = 'house';

// compiler error if you try to assign an unknown property name
// let unknownProperty: keyof IAddress = 'unknown';

const houseName: string = address[addressProperties];

console.log(`
	House Name  : ${houseName}
`);

console.log(`****************example 02***************`);

/*
 *	'T[K]' - expression syntax which represents the underlying type of
 *			 a property. Return type of the below function will depend
 *			 on the property name passed to the function. It can either
 *			 be a string or a number.
 */
function getPropertyValue<T, K extends keyof T>(obj: T, prop: K): T[K] {
	return obj[prop];
}

console.log(`
	Flat Number: ${getPropertyValue(address, 'flat')}
`);

console.log(`****************example 03***************`);
console.log(``);

/* tslint:disable */
function pluck<T, K extends keyof T>(object: T, propNames: K[]): T[K][] {
	return propNames.map((prop) => object[prop]);
}
/* tslint:enable */

pluck(address, ['house', 'flat']).forEach((val) => console.log(val));

console.log(`****************example 04***************`);

// mapped types
type Partial<T> = { [K in keyof T]?: T[K] };

// const nullAddress: IAddress = { };

const partialAddress: Partial<IAddress> = { };

export { getPropertyValue, pluck};
