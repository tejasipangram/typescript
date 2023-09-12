class Bag {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

const bag1 = new Bag("normal");

//object is created with name value as normal

class Bag1 {
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  changeName(name: string): string {
    // this.name = name;
    //this will not work because we have made the name as readonly
    return this.name;
  }
}

const bag2 = new Bag("normal");

//let see how interface works in the class
interface CarShape {
  getArea: () => number;
}

class Vehicel implements CarShape {
  getArea() {
    return 4323;
  }
}

// interface Shape {
//     getArea: () => number;
//   }

//   class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) {}

//     public getArea(): number {
//       return this.width * this.height;
//     }
//   }

//   class Square extends Rectangle {
//     public constructor(width: number) {
//       super(width, width);
//     }

//     // getArea gets inherited from Rectangle
//   }

// Override

// When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.
// interface Shape {
//     getArea: () => number;
//   }

//   class Rectangle implements Shape {
//     // using protected for these members allows access from classes that extend from this class, such as Square
//     public constructor(protected readonly width: number, protected readonly height: number) {}

//     public getArea(): number {
//       return this.width * this.height;
//     }

//     public toString(): string {
//       return `Rectangle[width=${this.width}, height=${this.height}]`;
//     }
//   }

//   class Square extends Rectangle {
//     public constructor(width: number) {
//       super(width, width);
//     }

//     // this toString replaces the toString from Rectangle
//     public override toString(): string {
//       return `Square[width=${this.width}]`;
//     }
//   }

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
//you can not create the instance of base class named as polygon used for inteheritance
