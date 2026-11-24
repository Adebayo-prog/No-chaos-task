
       for(let hundredunit = 1; hundredunit <= 9; hundredunit++) {

            for(let tensdigit = 0; tensdigit <= 9; tensdigit++) {

                for(let unitsdigit = 0; unitsdigit <= 9; unitsdigit++) {

                    let number = hundredunit * 100 + tensdigit * 10 + unitsdigit;

                    let sum = (hundredunit * hundredunit) + (tensdigit * tensdigit) + (unitsdigit * unitsdigit);

                    if (sum == number) {
                        
                        console.log("weldone great work");
                    }

                }
            }
        }
        
       console.log("please try again"); 
 

