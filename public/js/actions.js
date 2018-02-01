function restoreStrength(who){
    restoreValue = Math.min((who.curStats.strength_point + 2) + Math.floor(who.fullStats.strength_point / 5), (who.fullStats.strength_point - who.curStats.strength_point));
    if(who.Movement === "Restore Speed Points"){
        restoreValue = Math.min((who.curStats.strength_point+3)+ Math.floor(who.fullStats.strength_point / 5)*2, (who.fullStats.strength_point - who.curStats.strength_point)); 
    }
    $("#comments p").text(who.fullStats.character_name + " restored" + restoreValue + " Strength Points");
}

function restoreSpeed(who){
    restoreValue = Math.min((who.curStats.speed_point + 2) + Math.floor(who.fullStats.speed_point / 5), (who.fullStats.speed_point - who.curStats.speed_point));
    if(who.Movement === "Restore Speed Points"){
        restoreValue = Math.min((who.fullStats.speed_point+3)+ Math.floor(who.fullStats.speed_point / 5)*2, (who.fullStats.speed_point - who.curStats.speed_point)); 
    }
    $("#comments p").text(who.fullStats.character_name + " restored" + restoreValue + " Speed Points");
}

function meleeAttack(who){
    
    if(who.name === "player"){
        if(who.Defensive = "Block"){
            enemy.hitPoint =  enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3
            player.strength = player.strength - 2
            player.speed = player.speed - 1 
            $("#comments p").text("Player's attacked dealt" + enemy.hitPoint - (Math.floor(Math.random()*6)+1) -3 + " damage due to enemy block");
        }
        if(who.Defensive = "Dodge"){
            enemy.hitPoint =  enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1))
            player.strength = player.strength - 2
            player.speed = player.speed - 1 
            $("#comments p").text("Player's attacked dealt" + enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to enemy dodge");
        }
        if(charge){
            enemy.hitPoint = enemy.hitPoint - ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1))
            player.strength = player.strength - 2
            player.speed = player.speed - 1 
            $("#comments p").text("Player dealt" + enemy.hitPoint - ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1)) + " damage to enemy due to player charge attack");
        }
       enemy.hitPoint =  enemy.hitPoint - Math.floor(Math.random()*6)+1
       player.strength = player.strength - 2
       player.speed = player.speed - 1 
       $("#comments p").text("Player's attacked dealt" + enemy.hitPoint - Math.floor(Math.random()*6)+1 + " damage");
}
    }
    if(who === 1){
        if(block){
            player.hitPoint =  player.hitPoint - (Math.floor(Math.random()*6)+1) - 3
            enemy.strength = enemy.strength - 2
            enemy.speed = enemy.speed - 1
            $("#comments p").text("Player's attacked dealt" + player.hitPoint - (Math.floor(Math.random()*6)+1) -3 + " damage due to player block");
        }
        if(dodge){
            player.hitPoint =  player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1))
            enemy.strength = enemy.strength - 2
            enemy.speed = enemy.speed - 1
            $("#comments p").text("Enemy's attacked dealt" + player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to player dodge");
        }
        if(charge){
            player.hitPoint = player.hitPoint - ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1))
            enemy.strength = player.strength - 2
            enemy.speed = player.speed - 1 
            $("#comments p").text("Enemy dealt" + player.hitPoint - ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1)) + " damage to player due to enemy charge attack");
        }
        player.hitPoint = player.hitPoint - Math.floor(Math.random()*6)+1
        enemy.strength = enemy.strength - 2
        enemy.speed = enemy.speed - 1
        $("#comments p").text("Enemy's attacked dealt" + player.hitPoint - Math.floor(Math.random()*6)+1 + " damage");
    }
}

function meleeCombo(who){
    if(player.move === meleeAttack){
        if(who === 0){
            if(block){
                enemy.hitPoint =  enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3
                player.strength = player.strength - 1
                player.speed = player.speed - 2
                $("#comments p").text("Player's attacked dealt" + enemy.hitPoint - (Math.floor(Math.random()*6)+1) -3 + " damage due to enemy block");
            }
            if(dodge){
                enemy.hitPoint =  enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1))
                player.strength = player.strength - 1
                player.speed = player.speed - 2
                $("#comments p").text("Player's attacked dealt" + enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to enemy dodge");
            }
            if(charge){
                enemy.hitPoint = enemy.hitPoint - ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1))
                player.strength = player.strength - 2
                player.speed = player.speed - 1 
                $("#comments p").text("Player dealt" + enemy.hitPoint - ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1)) + " damage to enemy due to player charge attack");
            }
            enemy.hitPoint = enemy.hitPoint - Math.floor(Math.random()*6)+1
            player.strength = player.strength - 1
            player.speed = player.speed - 2
            $("#comments p").text("Player's attacked dealt" + enemy.hitPoint - Math.floor(Math.random()*6)+1 + " damage");
        }
        if(who === 1){
            if(block){
                player.hitPoint =  player.hitPoint - (Math.floor(Math.random()*6)+1) - 3
                enemy.strength = enemy.strength - 1
                enemy.speed = enemy.speed - 2
                $("#comments p").text("Player's attacked dealt" + enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to player block");
            }
            if(dodge){
                player.hitPoint =  player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1))
                enemy.strength = enemy.strength - 1
                enemy.speed = enemy.speed - 2
                $("#comments p").text("Enemy's attacked dealt" + player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to player dodge");
            }
            if(charge){
                player.hitPoint = player.hitPoint - ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1))
                enemy.strength = player.strength - 2
                enemy.speed = player.speed - 1 
                $("#comments p").text("Enemy dealt" + player.hitPoint - ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1)) + " damage to player due to enemy charge attack");
            }
            player.hitPoint = player.hitPoint - Math.floor(Math.random()*6)+1
            enemy.strength = enemy.strength - 1
            enemy.speed = enemy.speed - 2
            $("#comments p").text("Enemy's attacked dealt" + player.hitPoint - Math.floor(Math.random()*6)+1 + " damage");
        }
    }

}

function gunAttack(who){
    if(who === 0){
        if(block){
            enemy.hitPoint =  enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3
            player.speed = player.speed - 2
            $("#comments p").text("Player's shot dealt" + enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to enemy block");
        }
        if(dodge){
            enemy.hitPoint =  enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1))
            player.speed = player.speed - 2
            $("#comments p").text("Player's shot dealt" + enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to enemy dodge");
        }
        enemy.hitPoint = enemy.hitPoint - Math.floor(Math.random()*6)+1
        player.speed = player.speed - 2
        $("#comments p").text("Player's shot dealt" + enemy.hitPoint - Math.floor(Math.random()*6)+1 + " damage");
        
    }
    if(who === 1){
        if(block){
            player.hitPoint =  player.hitPoint - (Math.floor(Math.random()*6)+1) - 3
            enemy.speed = enemy.speed - 2
            $("#comments p").text("Enemy's shot dealt" + player.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to player block");
        }
        if(dodge){
            player.hitPoint =  player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1))
            enemy.speed = enemy.speed - 2
            $("#comments p").text("Enemy's shot dealt" + player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to player dodge");
        }
        player.hitPoint = player.hitPoint - Math.floor(Math.random()*6)+1
        enemy.speed = enemy.speed - 2
        $("#comments p").text("Enemy's shot dealt" + player.hitPoint - Math.floor(Math.random()*6)+1 + " damage");
        
    }
}

function aimedAttack(who){
    if(who === 0){
        if(block){
            enemy.hitPoint =  enemy.hitPoint - (Math.floor(Math.random()*6)+3) - 3
            player.speed = player.speed - 3
            $("#comments p").text("Player's aimed shot dealt" + enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to enemy block");
        }
        if(dodge){
            enemy.hitPoint =  enemy.hitPoint - ((Math.floor(Math.random()*6)+3) - (Math.floor(Math.random()*6)+1))
            player.speed = player.speed - 3
            $("#comments p").text("Player's aimed shot dealt" + enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to enemy dodge");
        }
        enemy.hitPoint = enemy.hitPoint - Math.floor(Math.random()*6)+3
        player.speed = player.speed - 3
        $("#comments p").text("Player's aimed shot dealt" + enemy.hitPoint - Math.floor(Math.random()*6)+3 + " damage");
        
    }
    if(who === 1){
        if(block){
            player.hitPoint =  player.hitPoint - (Math.floor(Math.random()*6)+3) - 3
            $("#comments p").text("Enemy's aimed shot dealt" + player.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to player block");
        }
        if(dodge){
            player.hitPoint =  player.hitPoint - ((Math.floor(Math.random()*6)+3) - (Math.floor(Math.random()*6)+1))
            enemy.speed = enemy.speed - 3
            $("#comments p").text("Enemy's aimed shot dealt" + player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to player dodge");
        }
        player.hitPoint = player.hitPoint - Math.floor(Math.random()*6)+3
        enemy.speed = enemy.speed - 3
        $("#comments p").text("Enemy's aimed shot dealt" + player.hitPoint - Math.floor(Math.random()*6)+3 + " damage");
        
    }
}

//function reload(who, func){

//}
