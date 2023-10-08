 let person={
    name:"jone",
    arrowFunction:()=>console.log(this.name),
    regularFunction:function(){
        console.log(this.name);
    }
 }
//  arrowFunction()
 regularFunction()