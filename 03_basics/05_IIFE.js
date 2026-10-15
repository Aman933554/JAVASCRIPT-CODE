

// Immediately Invoked Function Expression (IIFE)

// Normal function
function chai(){
    console.log(`DB CONNECTED`);
}
chai();



// USE OF IIFE   ka use ham Global scope k pollution se bachane k liye krte hai
// named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();

// -----------------
(function aurcode() {
    console.log(`DB CONNECTED TWO`); 
} )();

// ------ARROW FUNCTION--------

( () => {
    console.log(`DB CONNECTED TWO`);
}) ();


// ----UNNAMED IIFE
( (name) => {
    console.log(`DB CONNECTEDN TWO ${name}`);
}) ('hitesh')