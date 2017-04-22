/*
 * basic string index signature
 */
console.log(`****************example 01***************`);

interface ICompany {
	name: string;
	ticker: string;
	[indexer: string]: any;
}

interface IExchange {
	[index: string]: ICompany;
}

const nasdaq: IExchange = {
	ap: {
		name: 'Apple',
		ticker: 'APPL' },
	fv: {
		name: 'Fiserv',
		ticker: 'FISV' },
	gg: {
		name: 'Google',
		ticker: 'GOOGL' } };

const apple: ICompany = nasdaq['ap'];

console.log(`
	Ticker Symbol of Apple : ${apple.ticker}
`);

/*
 * type returned by numeric indexer should be a sub type of type returned by string indexer
 */
console.log(`****************example 02***************`);

class Division implements ICompany {
	constructor(
		public name: string,
		public ticker: string,
		public divisionName: string) { }
}

interface ISpecialExchange {
	[index: string]: ICompany;
	[index: number]: Division;
}

const hansei: ISpecialExchange = {
	10: {
		divisionName: 'tech',
		name: 'Facebook',
		ticker: 'FB' },
	20: {
		divisionName: 'tech',
		name: 'Microsoft',
		ticker: 'MSFT' },
	30: {
		divisionName: 'Sales',
		name: 'Snapchat',
		ticker: 'SNAP' } };

const facebook: ICompany = hansei['10'];
const snapChat: Division = hansei[30];

console.log(`
	Ticker Symbol of Facebook : ${facebook.ticker}
	Division Name from Snapchat : ${snapChat.divisionName}
`);

export { ICompany, Division, IExchange, ISpecialExchange };
