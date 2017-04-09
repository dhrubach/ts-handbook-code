console.log(`****************example 01***************`);
console.log(``);

interface ICheckFunc {
	(input: string, check: string, position: number): boolean;
}

let stringSearch: ICheckFunc;
// type of parameters in corresponding positions are validated, not parameter names
stringSearch = function(src: string, chk: string, startPos: number) {
	return src.indexOf(chk, startPos) > -1;
};

console.log(`'type' in 'typescript' : ${stringSearch('typescript', 'type', 0)}`);
console.log(`'java' in 'typescript' : ${stringSearch('typescript', 'java', 0)}`);
