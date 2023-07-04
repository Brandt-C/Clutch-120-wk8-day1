
/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */

console.log('Hello world from from TS');


// Our first TS Code
// age = 34
let age = 45;
console.log(age);
// the whole point of TS is static typing so we wanna be as specific as possible.
let age2: number = 54;
let nyName: string = 'Brandt';
let isPrime: boolean = true;



// ---------- TS Fundamentals ----------

// Built-in Types: variable: type = value
// see just above

// TS built-in types:  null, undefined, boolean, number, string , object, and symbol.


// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing
let students;

let fullName = (fname:string, lname:string) => {
    console.log(`${fname} ${lname}`);
}


// ----- Arrays: Dynamic, you can pass any data type
let numbers = [1, 2, 3];
console.log(numbers);
let stringsArr = ['a', 'string', 'array'];
console.log(stringsArr);
let numbers2 : number[] = [1, 2, 3];
let stringy : string [] = ['yet', 'anotehr', 'string'];
// let anotherArr = ['lksdjf', 234, null]
let multiArr : [number, string, boolean, null];
multiArr = [12,'sdflkj', true, null];

let dynamicArr: (number | string | boolean) [] = [true, 'string', 12, 234, 234, 'stringyagain', false];



// Another huge benefit: Code completion
// numbers2[0].
// stringy[1].

// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values

let nameAge : [string, number] = ['Brandt', 435];


// Code Completion

// console.log(nameAge)
// nameAge[1].

// nameAge.push(13);  --> a rare example where TS is not enforcing evertything how we would like.


// ----- Enums: Special "Class" that represents a group of constants.

const small = 1;
const medium = 2;
const large = 3;


// PascalCase "numeric"
enum Size {Small = 1, Medium = 2, Large=3};
console.log(Size.Small)

// "string"
enum Teach {Lead = 'Brandt', Associate = 'Brendan'}
console.log(Teach.Associate);



// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config

function calcTax(income : number, taxYear? : number) : number {
    if (income < 50_000) {
        console.log(taxYear);
        return income * 1.25
    } else {
        return income * 1.45
    }
    
}

console.log(calcTax(49_000));
console.log(calcTax(100_000));

// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/

let emp = {id:1};
console.log(emp);
console.log(typeof emp);
// emp[eName] = 'Brandt'  --> we have to be more specific!

let employee:{
    readonly id: number,
    eName: string,
    age? : number,
    location? : string 
} = {
    id : 1,
    eName : 'Brandt'
};
console.log(employee);
employee.location = 'IA';
employee['age'] = 18;
console.log(employee);
employee.age += 50;
console.log(employee);
// employee.id +=4;
