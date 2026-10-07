

// Array

const marvel_heros = ["thor","Ironman", "spiderman"]
const dc_heros = ["superman","flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][2]);

// use of concat merge two array

const college_student = ["Aman","Abhay"]
const Hostel_student = ["Ravi","Alok"]
const allHeros = college_student.concat(Hostel_student)
console.log(allHeros);



//  spread method  spread operator (...)


const all_new_heros = [...college_student, ...Hostel_student]
console.log(all_new_heros);


//max array in one array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// data select from other webpage other formate
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));  // interesting for interview


// make the array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));