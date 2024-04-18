let score = prompt('Enter score');
switch (true) {
    case score > 100:
        alert(' ');
        break;
    case score > 79:
        alert('A');
        break;
    case score > 69:
        alert('B');
        break;
    case score > 59:
        alert('C');
        break;
    case score > 49:
        alert('D');
        break;
    case score > 0:
        alert('F');
        break;
    default:
        alert('wrong');
}
