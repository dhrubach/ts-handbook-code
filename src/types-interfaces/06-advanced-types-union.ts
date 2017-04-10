enum BeneficiaryType {
	Son,
	Daughter,
	Spouse }

interface IPrimaryOwner {
	name: string;
	email: string;
	phoneNumber: string;
}

interface IBeneficiary {
	name: string;
	email: string;
	type: BeneficiaryType;
}

console.log(`****************example 01***************`);
console.log(``);

/*
*	access ONLY common properties available on constituent types of a union type
*/
function displayAccountOwnerDetails(signatory: IPrimaryOwner | IBeneficiary): void {
	console.log(`
		Signatory Name : ${signatory.name}
		Signatory Email : ${signatory.email}
	`);
}

const primaryOwner: IPrimaryOwner = {
	email: 'test@union.com',
	name: 'John Doe',
	phoneNumber: '345-123-123' };

displayAccountOwnerDetails(primaryOwner);

console.log(`****************example 02***************`);
console.log(``);

/*
*	determine underlying type of a union type value using type guard
*/
function isBeneficiary(signatory: IPrimaryOwner | IBeneficiary): signatory is IBeneficiary {
	return (<IBeneficiary> signatory).type !== undefined;
}

// NOTE : due to type guard used in line 50, it is possible to access 'type' parameter
// on 'signatory' object in line 55
function displayBeneficiaryDetails(signatory: IPrimaryOwner | IBeneficiary): void {
	if (isBeneficiary(signatory)) {
		console.log(`
			Signatory Name : ${signatory.name}
			Signatory Email : ${signatory.email}
			Beneficiary Type : ${BeneficiaryType[signatory.type]}
		`);
	} else {
		console.log(`Not a beneficiary`);
	}
}

const beneficiaryDetails = {
	email: 'test@union.com',
	name: 'John Doe',
	phoneNumber: '123-456-7890',
	type: BeneficiaryType.Daughter };

displayBeneficiaryDetails(beneficiaryDetails);

export { BeneficiaryType, IPrimaryOwner, IBeneficiary };
