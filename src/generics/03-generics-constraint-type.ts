/*
 * example 01 - basic generic constraint using type parameter
 */
console.log(`****************example 01***************`);

function getPropertyValue<T, K extends keyof T>(obj: T, prop: K): T[K] {
	return obj[prop];
}

const tsObject = {
	name: 'typescript',
	version: '2.2' };

const val = getPropertyValue(tsObject, 'version');
console.log(``);
console.log(`TypeScript Language Version : ${val}`);

// const nonExistentProperty = getPropertyValue(tsObject, 'releaseDate');
