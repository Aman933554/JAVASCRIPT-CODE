
// for in loop  used for object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {       // key output
    console.log(key);
}

for (const key in myObject) {     // values output
    console.log(myObject[key]);
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// for in  loop is used for array or not

const programming = ["js", "rb","py", "java"]

// for(const key in programming){   // key output k liye
//     console.log(key);
//     console.log(key);
// }

for(const key in programming){  // values output k liye
    console.log(programming[key]);
}