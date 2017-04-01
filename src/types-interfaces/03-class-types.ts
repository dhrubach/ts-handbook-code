namespace interface.classTypes {

	enum Rating {
		Good,
		Bad,
		Ugly
	}

	interface IConstructor {
		new (name: string, rating: Rating): IMobile;
	}

	interface IMobile {
		name: string;
		rating: Rating;
	}

	function createMobile(consFn: IConstructor, name: string, rating: Rating): IMobile {
		return new consFn(name, rating);
	}

	class Apple implements IMobile {
		constructor(public name: string, public rating: Rating) { }
	}

	class Samsung implements IMobile {
		name: string;
		rating: Rating;
		constructor(nm: string, rt: Rating) {
			this.name = nm;
			this.rating = rt;
		}
	}

	let apl = createMobile(Apple, 'iPhone 7', Rating.Good);

	let samsung = createMobile(Samsung, 'Galaxy Note 7', Rating.Ugly);

	console.log(`Rating for Apple : ${Rating[apl.rating]}`);

	console.log(`Rating for Samsung : ${Rating[samsung.rating]}`);
}
