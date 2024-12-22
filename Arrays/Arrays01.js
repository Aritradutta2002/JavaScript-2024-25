
const person = ["Aritra", "Suman", "Adrij", "Pallab"];
const ages   = [22, 24, 14, 35];

console.log(person[0] +"'s age is " + ages[0]);
console.log(person[1]+"'s age is " + ages[1]);
console.log(person[2]+"'s age is " + ages[2]);

/* =============================================================================================== */

const numbers = [20, 19 , 45 , 44, 48, 56, 27, 57, 58, 29, 33, 999, 97, 998];

/* write a program to print odd and even numbers in an Array */

var dec = true;
for(let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i] + " even num");
    }
    else{
        console.log(numbers[i] + " odd num");
    }

}

/* Write a program to print largest number in the Array */

let largest = numbers[0];

for(let i = 1; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}

console.log(largest);



