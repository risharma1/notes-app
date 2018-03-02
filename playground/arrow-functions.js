//standard arrow function
var square_1 = (x) => {
  var result = x*x;
  return result;
}
console.log(square_1(2));
var square_2 = (x) => x*x; //when return only with one line condition or operations
console.log(square_2(3));
var square_3 = x => x*x; //no parenthesis for only one argument
console.log(square_3(4));

var person = {
  name: 'rishabh',
  arrow: ()=>{
    //this won't work
    console.log("Arrow: I am "+this.name);
    console.log(arguments);//prints static arg object instead of formal parameters
  },
  //ES6 way, no keyname and function keyword
  notArrow (){
    //this will work
    console.log("Not Arrow: I am "+this.name);
    console.log(arguments);//prints actual parameters arraytype object
  }
};

person.arrow(1,2,3);
person.notArrow('a','b','c');
