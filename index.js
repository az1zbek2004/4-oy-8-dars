// FIRST EXEMPLE 
// let arr = [21, 3, 5, 90, 3, 11, 1];

// let n=+prompt("Sonni kiriting");
// const indexSearch = (arg) => {
//     let res;
//    if (arg.indexOf(n)!=-1) {
//      res=arg.indexOf(n)**2;
//    } else {
//      res='mavjud emas';
//    }

//    return res;
// }

// console.log(indexSearch(arr));


// SECOND EXEMPLE 
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [7,8,9];

// function add(prm1, prm2) {
//     let mass = prm2.concat(prm1, prm1);
//     return mass;
// }

// console.log(add(arr1, arr2));


// THIRD EXEMPLE 
// let arr = [21, 3, 5, 90, 3, 11, 1];
// const kvSon = (arg) => {
//     let a=arg.find((value) => {
//         return value<11;
//     });
    
//     return a**2;
// }

// console.log(kvSon(arr));

// FOURTH EXEMPLE 
// let arr = [21, 3, 5, 90, 3, 11, 1];

// const toqSon = function(arg){
//     let counter=0;
//     arg.forEach((value) => {
    
//     if (value%2==1) {
//         counter++;
//     }

//  });

//  return counter;
// }

//  console.log(toqSon(arr));

// FIFTH EXEMPLE 
// let wordArray=['salom', 'hello', 'xayr', 'bye', 'world', 'wide', 'web' ];
// function words(arg) {
//     let res=[];
//     arg.forEach((value) => {
//     res.push(value.charAt(value.length-1));
// });
// return res;
// }

// console.log(words(wordArray));

// SIX EXEMPLE 
// let arr = [3, 11, 21, 32, 41, 13];

// const tubSonmi = function(prm) {
//     let counter=0;
//   for (let i = 1; i <= prm; i++) {
//         if (prm%i==0) {
//             counter++;
//         }
//   }

//   if (counter==2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const tubSonSum = (prm) => {
//     let sum=0;
//     for (const value of prm) {
//         if (tubSonmi(value)) {
//             sum+=value;
//             console.log(value);
//         }
//     }

//     return sum;
// }

// console.log(tubSonSum(arr));