// 1. String
let name = "Nahdah";
console.log(name);

// 2. Boolean
let isMember = false;
let isSpecialDay = true;

let getDiscount = isMember || isSpecialDay; 
console.log("Memenuhi syarat penggunaan diskon:", getDiscount);

// 3. Number
let umurNahdah = 20;
console.log(umurNahdah);

// 4. Array
let cowoNahdah = ["Jeno", "Jaemin", "Mingyu<3"];
cowoNahdah [1] = 'Jaehyun';
console.log(cowoNahdah);
console.log(cowoNahdah.length);

// 5. BigInt
let bigNumber = 1e6;
console.log(bigNumber);

// 6. Object
const person = {
    name: "Nahdah",
    age: 20,
};
console.log(person);

// 7. Logical Operator
let x = 12; 

if (x > 5 && x < 10) {
  console.log("x berada di antara 5 dan 10");
} else {
  console.log("x tidak berada di antara 5 dan 10");
}

// 8. Equality Comparison
let a = null;
let b = undefined;

console.log(a == b);  
console.log(a === b);
