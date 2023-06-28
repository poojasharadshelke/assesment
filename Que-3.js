// Demonstrate object assignment and reference in JavaScript

// Define the first object
let obj1 = { "greeting": "hello" };

// Assign obj1 to obj2, creating a reference to the same object
let obj2 = obj1;

// Modify the "greeting" property of obj1
obj1["greeting"] = "Bye";

// Print the modified obj1 and obj2
console.log(obj1);
console.log(obj2);
