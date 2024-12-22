/*
Create a function that takes an array of objects as input, and returns 
the users whose age > 18 and are male only.
*/

function Solve(users){

    let arr = [];

    for (let i = 0; i < users.length; i++) {
        if(users[i].Gender === "Male" && users[i].Age > 18){
            arr.push(users[i].Name);
        }
    }
    
    return arr;
}

const users = [{
    Name : "Aritra Dutta",
    Age : 22,
    Gender : "Male"
}, {
    Name : "Suman Das",
    Age : 12,
    Gender : "Male"
}, {
    Name : "Madhumita",
    Age : 22,
    Gender : "Female"
}, {
    Name : "Tarun",
    Age : 19,
    Gender : "Male"
}, {
    Name : "Supriya",
    Age : 30,
    Gender : "Female"
} ];


console.log(Solve(users));
 


