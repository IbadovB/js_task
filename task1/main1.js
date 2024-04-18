function greaterNum(){
    let a = prompt('enter number');
    let b = prompt('enter number');
    switch (true){
        case a > b:
            alert(a);
            break;
        case b > a:
            alert(b);
            break;
        default:
            alert('wrong');
    }
}
greaterNum()



  