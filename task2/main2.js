let myAge = prompt('My age');
    let yourAge= prompt('Enter your age');
      
    switch (true) {
      case myAge>yourAge:
        console.log (`You are ${myAge-yourAge} years younger than me.`);
        break;   
      case myAge<yourAge:
        console.log (`You are ${yourAge-myAge} years older than me.`);
        break;  
        case myAge===yourAge:  
        console.log ('We have the same age');
      default:
        console.log ('wrong age');
    }