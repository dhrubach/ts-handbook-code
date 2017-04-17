/*
 * example 01 - basic generic constraint using interface
 */
console.log(`****************example 01***************`);

function calculateLength<T>(arg: T): void {
	console.log(`display length of input argument`);
	// following statement will fail as type 'T' does not define property 'length'
	// console.log(`length of argument : ${arg.length}`);
}

console.log(``);
console.log(`****************example 02***************`);

// define type contraint interface
interface ILength {
	name?: string;
	length: number;
}

// revised 'calculateLength' method with type constraint
function calculateLengthWithConstraint<T extends ILength>(arg: T): void {
	console.log(`display length of input argument`);
	console.log(`length of argument : ${arg.length}`);
	console.log(`argument value : ${arg.name || 'unknown'}`);
}

calculateLengthWithConstraint<string>('typescript');

console.log(``);
console.log(`****************example 03***************`);

type stringProxy = { length: number };
calculateLengthWithConstraint<stringProxy>('javascript');

console.log(``);

calculateLengthWithConstraint({
	length: 10,
	name: 'typescript' });
