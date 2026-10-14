// let a = 10          // variables let ,const  ,var
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);


// ----------------------
if(true){
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
console.log(c);


// --------------------------
// let  a = 300
if(true){
    let a = 10
    const b = 20
}
console.log(a);
//console.log(b);


// ----------------------
let a = 300
if(true){
    let a = 10
    const b =20
    console.log("INNER:",a);

}
console.log(a);