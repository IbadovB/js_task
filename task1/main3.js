function assignGrade() {
    let score = prompt('Student scores','');
    if (score > 90) {
        alert('A');
    } else if (score > 85) {
        alert('B')
    } else if (score > 75) {
        alert('C');
    } else if (score > 65) {
        alert('D');
    } else {
        alert('F');
    } 
    }
    
    assignGrade()