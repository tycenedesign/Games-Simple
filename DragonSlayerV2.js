var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying){
    if(youHit){
        console.log("You hit him " + damageThisRound + " times!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4){
            console.log("You slew the dragon! Way to go!");
            slaying = false;
            }
        else{
            youHit = Math.floor(Math.random() * 2);
            }
        }
    else{
         console.log("You missed!"); 
         slaying = false;
        }
    }