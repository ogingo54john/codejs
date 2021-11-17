// var output=[];
// output.push(2);
// console.log(output);
var output=[];
var n=1,i=0;
function fizzbuzz(){
    output.push(n);
    if(n%3===0){
        output.push("fizz");
    }else if(n%5===0){
        output.push("buzz");
    }else{
        
    }
    output.push(n);
    n++;
   console.log(output)
}