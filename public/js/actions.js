function restoreStrength(who){
retoreValue <= player.strengthPoint
retoreValue = (player.strengthPoint + 2) + Math.abs(player.fullStat.strengthPoint%5)
if(player.movement === "Restore Speed Points"){
    retoreValue = (player.strengthPoint+3) + Math.abs((player.fullStat.strengthPoint%5)*2) 
}
$("#comments p").text("Player restored" + player.strengthPoint + retoreValue + " Strength Points");
}

function restoreSpeed(who){
    retoreValue <= player.speedPoint
    retoreValue = (player.speedPoint + 2) + Math.abs(player.fullStat.speedPoint%5)
    if(player.movement === "Restore Strength Points"){
        retoreValue = (player.speedPoint+3) + Math.abs((player.fullStat.speedPoint%5)*2) 
    }
    $("#comments p").text("Player restored" + player.speedPoint + retoreValue + " Speed Points");
    }

function meleeAttack(who){
    
    if(who === 0){
        if(block){
            enemy.hitPoint =  enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3
            player.strength = player.strength - 2
            player.speed = player.speed - 1 
            $("#comments p").text("Player's attacked dealt" + enemy.hitPoint - (Math.floor(Math.random()*6)+1) -3 + " damage due to enemy block");
        }
        if(dodge){
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
