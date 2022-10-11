// products
// class product {
// constructor will be the first function to be called for creating an object
//   constructor(n, p) {
//     console.log("COnstructor is called");
//     this.name = n;
//     this.price = p;
//   }

// member function
//   displayProduct() {
//     console.log("Name of the product is", this.name);
//     console.log("Price of the product is", this.price);
//   }

//   buyProduct() {}
// }

// let Iphone = new product("Iphone", 100000);
// member function can be called by (.)operator
// Iphone.displayProduct();

// console.log(Iphone, typeof Iphone);
// let airpods = new product("Airpods", 50000);
// let macbook = new product("MacBook", 150000);
// let imac = new product("IMac", 15000);

// function constructor() {
//   console.log("hello");
// }
// constructor();

// class complex {
//   constructor(r, i) {
//     this.real = r;
//     this.imag = i;
//   }
//   add(c) { // c is the complex number to be added
//     this.real = this.real + c.real;
//     this.imag = this.imag + c.imag;
//   }
//   display() {
//     console.log(this.real, "+", this.imag, "i");
//   }
// }

// let c1 = new complex(3, 2);
// // c1.display();

// let c2 = new complex(7, 2);
// c1.add(c2);

// c1.display();

////////////////////////////////////////////////
// products with functions

// function product(n, p) {
//   this.name = n;
//   this.price = p;
// }
// let iphone = new product("Iphone", 10000);
// console.log(iphone);

////////////////////////////////////////////////
// this

// var teacher = "Sanket";
// function askQuestion(question) {
//   console.log(this.teacher, question);
// }

// function other() {
//   var teacher = "Sanket";
//   askQuestion("What is JS");
// }
// other();

// let obj = {
//   teacher: "Sarthak",
//   ask: askQuestion,
// };
// obj.ask("What is closure ?");

// let obj1 = {
//   ask: askQuestion,
// };
// obj1.ask("What is JS?");

////////////////////////////////////////////////
// new keyward

// function product(n, p) {
//   console.log("this at start", this);
//   this.name = n;
//   this.price = p;
//   console.log("this at end", this);
//   // return { marks: 100 };
//   return [100];
// }
// const iphone = new product("iphone", 100000);
// console.log(iphone);

////////////////////////////////////////////////
// Arrow function with this.js

// var teacher = "Sanket";
// let askQuestion = (question) => {
//   console.log(this.teacher, question);
// };

// let obj = {
//   teacher: "Sarthak",
//   ask: askQuestion,
// };
// obj.ask("What is closure ?");

// let obj1 = {
//   ask: askQuestion,
// };
// obj1.ask("What is JS?");

function saying(word) {
  console.log(this);
  let ask = (ques) => {
    console.log(this.teacher, ques);
  };
  ask(word);
}

let obj = {
  teacher: "Sanket",
  say: saying,
};
obj.say("What is the next topic");
