//leap year on every year is divisible by4
//except every year that is evenly divisibleby 100
//unless the year is also divisible by 400
var leapyear;
leapyear= prompt("Enter a year to check whether its a leap year");
function Isleapyear(year){
  if(leapyear%4===0){
    if(leapyear%100===0){
        if(leapyear%400===0){
            return "is a leapyear";
        }else{
            return "not a leapyear";
        }
    }else{
        return "a leapyear";
    }
  } else{
      return "not a leapyear";
  }
}
