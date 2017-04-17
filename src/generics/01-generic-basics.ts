/*
 * example 01 - basic generic type
 */
console.log(`****************example 01***************`);

function identity<T>(arg: T): T {
	return arg;
}

const languageIdentity = identity<string>('typescript');
console.log(`Language : ${languageIdentity}`);

const versionIdentity = identity<number>(2.3);
console.log(`Version : ${versionIdentity}
`);

/*
 * example 02 - type argument inference
 */
console.log(`****************example 02***************`);

const languageOtherIdentity = identity('javascript');
console.log(`
    Language  : ${languageOtherIdentity}
`);

/*
 * example 03 - generic type compatibility
 */
console.log(`****************example 03***************`);

function otherIdentity<T>(arg: T): void {
	console.log(`
    	argument value : ${arg}
    	argument type : ${typeof arg}
  	`);
}

// argument name is not part of type compatibility check
const newOtherIdentity: <T>(tparameter: T) => T = otherIdentity;
// console.log(typeof newOtherIdentity);
newOtherIdentity<number>(10);
newOtherIdentity<string>('ten');

/*
 * example 04 - using an interface in the example above
 */
console.log(`****************example 04***************`);

interface IIdentity {
	<T>(arg: T): T;
}

const identityWithInterface: IIdentity = otherIdentity;
identityWithInterface<string>('typescript');

interface IOtherIdentity<T> {
	(arg: T): T;
}

// const identityWithInterfaceTypeParameter: IOtherIdentity<string> = otherIdentity;
const identityWithInterfaceTypeParameter: IOtherIdentity<string> = identity;
// console.log(typeof identityWithInterfaceTypeParameter);
console.log(`Language : ${identityWithInterfaceTypeParameter('typescript')}`);
