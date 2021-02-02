// any is consider true except zero;
// if any string is empty even white space is none its a falsy.
// if any var or let is not declare its consider undefined and falsy
// if any var is = null its false.
// If any var is = NaN  is falsy value
// '0', " " {} [] is truthy 


const name = 'Solaiman khan';
if (name.length > 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}