// console.log(hey("duder"), activeDate({ startDate: new Date("2018-12-01"), endDate: new Date("2018-12-10")}));

// class Animal {
// private sound :string;
// private move: string;

// constructor(g: string = 'kfgjn', o: string = 'dkfjgnd') {
// this.sound = g;
// this.move = o;
// }

// print() {
// console.log(${this.sound} , ${this.move});
// }
// }

// ////

// let asd = new Animal();
// let kot = new Animal('miał', 'szybko');
// let pies = new Animal('bark', 'wolno');

// asd.print()
// kot.print();
// pies.print();

class Jajeczko {
  constructor(theName: string, theSurname: string) {}

  klops(a: number) {
    console.log("a", a);
  }
}
class Animal extends Jajeczko {
  isBarking: boolean = true;

  constructor(theName: string, theSurname: string) {
    super(theName, theSurname);
  }

  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
    console.log("isBarking", this.isBarking);
  }
}

class Dog extends Animal {
  // isBarking: boolean;
  theSex: string;

  constructor(theName: string, theSurname: string, theSex: string) {
    super(theName, theSurname);
    this.theSex = theSex;
  }

  bark() {
    console.log("Woof! Woof!");
    console.log(this.theSex);
  }

  move(m: number) {
    super.move(m);
    console.log("hahahha");
  }
}

const dog = new Dog("Klops", "jajecko", "male");
dog.bark();
dog.move(10);
dog.bark();
dog.klops(9);
dog.isBarking = false;
// const fullNameMaxLength = 9;

// class Employee {
//   private _fullName: string = "";

//   get fullName(): string {
//     return this._fullName;
//   }

//   set fullName(newName: string) {
//     if (newName && newName.length > fullNameMaxLength) {
//       throw new Error("fullName has a max length of " + fullNameMaxLength);
//     }

//     this._fullName = newName;
//   }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";

// if (employee.fullName) {
//   console.log(employee.fullName );
// }

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let employee = new Employee("Bob");
