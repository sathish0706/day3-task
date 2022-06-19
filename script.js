//for of
let fruits =['apple',"orange","banana","pinapple"]
  for(var e of fruits)
  console.log(e);
//for in
var student ={
    name : "xxx",
    age : 22,
    gender : "male",
}
for(var e in student)
console.log(`key is ${e}  value is ${student[e]}`);

let studentJSON = JSON.stringify(student);
     console.log(student);
     console.log(studentJSON);
     
     let studentobj = JSON.parse(studentJSON);
       console.log(studentobj);

var person = [
    
      {name: "xxx", age : 20, gender :"male"},
       {name: "yyy", age : 21, gender :"male"},
        {name: "zzz", age : 24, gender :"female"},
    
]
     for(let e of person)
        // console.log(e);
        console.log(e.name);