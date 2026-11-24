const prompt = require("prompt-sync")();

        let sum = 0.0;
        let count = 0;
        
        console.log("Enter a numbers or (enter -1 to stop): clear");
        
        while (true) { 
       
            let number = Number(prompt("Enter a number: "));
            
            
          
            if (number == -1) {
                console.log("Program stopped.");
                break;
            }
            
            sum += number;
             count++;
            
            
            let average = sum / count;
            console.log("Current running average: ", average);
        }



