function message() {
let numb=prompt('');
let remainder= (numb % 2);
if (remainder==0) {
alert(`${numb} is an even number`);
} else {
   alert(`${numb} is an odd number`);
}
}
message()