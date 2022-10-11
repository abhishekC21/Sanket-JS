// Abstruction

// class A {
//   constructor() {
//     this.x = undefined;
//   }
//   display() {
//     console.log(this.x);
//   }
// }

// class B extends A {
//   // B -->child, A --> paraent
//   constructor() {
//     super(); // calls the paraent construtor
//     this.y = 10;
//   }
// }

// class c extends A {
//   constructor() {
//     super();
//     this.z = 9;
//   }
// }

// let bobj = new B();
// console.log(bobj);
// let cobj = new c();
// console.log(cobj);

////////////////////////////////////////////////
// Encapsulation
/*
class A {
  #y; // declare the private variable
  constructor() {
    this.x = undefined;
    this.#y = null; // private
  }
  display() {
    console.log(this.x);
}
getY() {
    // getter
    console.log(this.#y);
}
  putY(el) {
    // setter
    if (typeof el == "string") return;
    this.#y = el;
  }
}

let aObj = new A();
console.log(aObj);

aObj.x = 10;
// aObj.y = 9;

console.log(aObj);
aObj.putY(10);
aObj.getY();
*/

/*
class complex {
  #real;
  #imag;
  constructor(r, i) {
    this.#real = r;
    this.#imag = i;
  }
  getReal() {
    return this.#real;
}

getImag() {
    return this.#imag;
}

setReal(r) {
    this.#real = r;
  }

  setImag(i) {
    this.#imag = i;
}

  display() {
      console.log(`${this.#real}+i${this.#imag}`);
  }

  add(c) {
    this.#real = this.#real + c.getReal();
    this.#imag = this.#imag + c.getImag();
  }
}
*/

////////////////////////////////////////////////
// prototype

// class product {
//   constructor(n, p) {
//     this.name = n;
//     this.price = p;
//   }

//   display() {
//     console.log(this.name, this.price);
//   }
// }

// function Product(n, p) {
//   this.name = n;
//   this.price = p;

//   this.display = function printProduct() {
//     console.log(this.name, this.price);
//   };
// }
// Product.prototype.display = function (msg) {
//   console.log("prototype display", msg);
// };
// const p = new Product("iphone", 100000);
// p.display();
// console.log(p.constructor === Product);
// console.log(p.__proto__ === Product.prototype);

// p.display = function (msg) {
//   this.__proto__.display(msg.toUpperCase());
// };

// p.display("hello");

// function product(n) {
//   this.name = n;
// }
// product.prototype.display = function (msg) {
//   console.log(this.name, msg);
// };

// let d = new product("iphone");
// d.display("in stock");

////////////////////////////////////////////////
// prototype Inheritance

function product(n) {
  this.name = n;
}
product.prototype.display = function () {
  console.log(this.name);
};

function phone(m) {
  this.model = m;
}

phone.prototype = Object.create(product.prototype);

let p = new phone("sjnf");
console.log(p);
