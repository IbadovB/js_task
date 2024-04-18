let age = prompt('Enter your age');
      
    switch (true) {
      case age>= 18:
        alert ('You are old enough to drive.');
        break;   
      case age<18:
        alert (`You are left ${18-age} with  years to drive.`);
        break;        
      default:
        alert ('wrong');
    }