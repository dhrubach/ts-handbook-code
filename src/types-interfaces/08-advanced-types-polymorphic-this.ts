class BasicCalculator {

	constructor(protected value: number = 0) { }

	public add(input: number): this {
		this.value = this.value + input;
		return this;
	}

	public result(): void {
		console.log(`
			Calculated Value : ${this.value}
		`);
	}

}

class ScientificCalculator extends BasicCalculator {

	constructor(value: number) {
		super(value);
	}

	public squareCube(): this {
		this.value = this.value ** 3;
		return this;
	}
}

const calc = new ScientificCalculator(6);
calc.add(2).squareCube();

console.log(`Find square cube of 8`);
calc.result();

export { BasicCalculator, ScientificCalculator };
