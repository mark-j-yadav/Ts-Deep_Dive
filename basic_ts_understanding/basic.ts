

// let namehai = "muskan"

// console.log(namehai)


// function add(num1:number, num2:number){
//     return num1 + num2
// }

// console.log(add(5, 10))




// 1. Type Safety (Runtime vs Compile-time)

// JavaScript

// function add(a, b) {
//   return a + b;
// }

// add(5, "10"); // Output: "510" (bug but no error)


// TypeScript
// function add(a: number, b: number): number {
//   return a + b;
// }

// add(5, "10"); // ❌ Error: Argument of type 'string' is not assignable




// 2. Function Contracts (Strict Inputs/Outputs)

// JavaScript

// function getUser(user) {
//   return user.name;
// }

// getUser({}); // ❌ runtime error (name undefined)



// TypeScript
// type User = {
//   name: string;
//   age: number;
// };

// function getUser(user: User): string {
//   return user.name;
// }

// getUser({}); // ❌ compile-time error


// 3. Object Structure Enforcement

// JavaScript
// const user = {
//   name: "Mark",
// };

// user.age = 25; // allowed
// TypeScript
// type User = {
//   name: string;
//   age: number;
// };

// const user: User = {
//   name: "Mark",
//   // ❌ age missing → error
// };


// 4. Auto Suggestions & IntelliSense

// type User = {
//   name: string;
//   age: number;
// };

// const user: User = { name: "Mark", age: 22 };

// user. // 👉 yahan VS Code sari properties suggest karega



// 5. Interfaces (Clean Structure Design)

// JavaScript (no direct feature)
// // structure manually maintain karna padta hai

// TypeScript
// interface Product {
//   id: number;
//   name: string;
// }

// const item: Product = {
//   id: 1,
//   name: "Laptop",
// };


// 6. Enums (Readable Constants)

// JavaScript
// const role = 0; // kya hai ye?
// TypeScript
// enum Role {
//   Admin,
//   User,
// }

// const role = Role.Admin;



// 7. Safer API Handling (Real-world use)



// JavaScript

// fetch("/api/user")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.name.toUpperCase()); // crash ho sakta hai
//   });



// TypeScript
// type User = {
//   name: string;
// };

// fetch("/api/user")
//   .then(res => res.json())
//   .then((data: User) => {
//     console.log(data.name.toUpperCase()); // safe
//   });

// 8. Generics (Reusable Code)


// JavaScript
// function identity(value) {
//   return value;
// }
// TypeScript
// function identity<T>(value: T): T {
//   return value;
// }