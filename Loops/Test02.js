
let teaCollections = []

let tea

do {
   tea =  prompt(`Enter your favourite tea (type "stop" to finish) `)

   if(tea !== "stop"){
        teaCollections.push(tea)
   }
} 

while (tea != "stop");

console.log(teaCollections);
