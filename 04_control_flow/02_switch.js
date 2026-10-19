
//  //syntax of switch


// switch (key) {           
//     case value:
        
//         break;

//     default:
//         break;
// }



// ----------------------------------------

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;                        // man lo es break ko ham comment kar dete to sab execute
//                                       //krta only default ko nahi karta execute
//     case 4:            
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }


// ----------------------------------------

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;                        // man lo es break ko ham comment kar dete to sab execute
                                      //krta only default ko nahi karta execute
    case "april":            
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}



