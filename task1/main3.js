function assignGrade() {
    let score = prompt('Enter score');
    switch (true) {
      case score > 90:
        alert ('A');
        break;
      case score>85:
        alert ('B');
        break;
      case score>75:
        alert ('C');
        break;
        case score>65:
        alert ('D');
        break;
      default:
        alert ('F');
    }
    }    
    assignGrade()