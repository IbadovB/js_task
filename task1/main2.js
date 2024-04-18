
function language() {
    let text = prompt('Hello World', 'choose language: es, de, en');
    switch (text) {
        case 'de':
            alert('Pozdrav svijete');
            break;
        case 'es':
            alert('Tere, Maailm');
            break;
        case 'en':
            alert('Hello World');
            break;
        default:
            alert('Hello World');
    }
}
language()
