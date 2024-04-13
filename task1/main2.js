

function language(){
    let text= prompt('Hello World', 'choose language: en,de,es'); 
    if(text=='de') {
        alert('Pozdrav svijete');
    }else if(text=='es') {
        alert('Tere, Maailm');
    }else{
        alert('Hello World');
    }
}
language()
