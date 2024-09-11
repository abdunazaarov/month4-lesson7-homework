const heading = document.querySelector(".title")

let offset = 0;

function inc(){

    if (offset >= 1000){
        return null;
    }
    else if (offset >= 100 && offset > 10){
        offset += 100;
    }
    else if (offset >= 10){
        offset += 10;
    }
    else {
        offset++;
    }
    heading.innerHTML = offset
}
function dec(){
    if (offset > 100){
        offset -= 100;
    }
    else if (offset > 10){
        offset -= 10;
    }
    else if (offset <= 0){
        return null;
    }
    else if(offset <= 10) {
        offset--;
    }
    heading.innerHTML = offset
}



// ------------------------------------------------------------------------------

// 1 - Masala


// {
//     function descendingOrder(n){
//         return parseInt(String(n).split('').sort().reverse().join(''))
//     }

//     console.log(descendingOrder(1234));
// }

// ---------------------------------------------------------------------------------

// 2 - Masala


// {
//     function isSquare(n) {
//         return Math.sqrt(n) % 1 === 0;
//     }
// }

// ------------------------------------------------------------------------------

// 3 - Masala


// {
//     function opposite(number) {
//         return -number;
//     }

//     console.log(opposite(-7));
// }

// ----------------------------------------------------------------

// 4 - Masala


// {
//     function makeNegative(num) {
//         return num < 0 ? num : -num;
//     }

//     console.log(makeNegative(8));
// }

// ------------------------------------------------------------------

// 5 - Masala


// {
//     function boolToWord( bool ){
//         return bool ? 'Yes':'No';
//     }

//     console.log(boolToWord(9));
// }

// --------------------------------------------------------------------

// 6 - Masala


// {
//     function repeatStr (n, s) {
//         return s.repeat(n);
//     }

//     console.log(repeatStr(6, 'Hello'));
// }

// ----------------------------------------------------------------------

// 7 - Masala


// {
//     function sumOfPositives(arr) {
//         return arr.reduce((sum, num) => {
//           return num > 0 ? sum + num : sum;
//         }, 0);
//     }
      
//     let numbers = [1, -4, 7, 12];
//     console.log(sumOfPositives(numbers)); 
      
// }

// -------------------------------------------------------------------------

// 8 - Masala

// Birinchi va oxirgi harflarni olib tashlaydi.


// {
//     function removeChar(str) {
//         return str.slice(1, -1);
//     }

//     console.log(removeChar("salom"))
// }

// ------------------------------------------------------------------------------

// 9 - Masala

// Unli harflar sonini aniqlaydi. 


// {
//     function getCount(str) {
//         const vowels = ['a', 'e', 'i', 'o', 'u'];
//         return str.split('').filter(char => vowels.includes(char)).length;
//     }

//     console.log(getCount("Salomalekum"));
// }

// ------------------------------------------------------------------------------------

// 10 - Masala


// {
//     function getMiddle(s) {
//         let middle = Math.floor(s.length / 2); 
        

//         if (s.length % 2 === 1) {
//           return s[middle];
//         } else {
        
//           return s[middle - 1] + s[middle];
//         }
//       }
      
//       console.log(getMiddle("test"));  
//       console.log(getMiddle("testing"));   
//       console.log(getMiddle("middle"));    
//       console.log(getMiddle("A"));       
      
// }

// -----------------------------------------------------------------------------------

// 11 - Masala


// {
//     function findShort(s) {
//         let words = s.split(' ');              
//         let shortest = words[0].length;        
      
//         for (let i = 1; i < words.length; i++) {
//           if (words[i].length < shortest) {    
//             shortest = words[i].length;         
//           }
//         }
      
//         return shortest;                   
//       }
      
      
//       console.log(findShort("Simple given a string of words"));    
//       console.log(findShort("The quick brown fox jumps over"));    
//       console.log(findShort("JavaScript is fun and exciting"));   
      
// }

// -----------------------------------------------------------------------------------------

// 12 - Masala


// {
//     function solution(str, ending) {
//         return str.endsWith(ending); 
//       }
      
//       console.log(solution('abc', 'bc')); 
//       console.log(solution('abc', 'd')); 
      
// }

// --------------------------------------------------------------------------------------

// 13 - Masala


// {
//     function friend(friends){
//         return friends.filter(name => name.length === 4);
//     }
// }

// -----------------------------------------------------------------------------------------------

// 14 - Masala

// {
//     function squareSum(numbers) {
//         return numbers.reduce((sum, num) => sum + num * num, 0);
//     }
      
//       console.log(squareSum([1, 2, 2]));  
//       console.log(squareSum([1, -1, 1]));
      
// }

// -----------------------------------------------------------------------------------------------