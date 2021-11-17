//guestlist.include(peter);check an element exist in an array
var guestlist=["john","george","helllen","regina"];
var name= prompt("Enter your name");
if (guestlist.includes(name)){
    alert("welcome");
}else{
    alert('NOT IN LIST OF GUEST');
    
}

