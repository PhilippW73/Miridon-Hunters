
//       function gunAttack(who){
//           eval(who).curStats.speed_point = eval(who).curStats.speed_point - 1;
//           if(eval(eval(who).opposition).Defensive = "Block"){
//               var damage = Math.max((eval(who).fullStats.strength_point - eval(eval(who).opposition).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
//               if(eval(who).Movement != "Charge") {
//                   $("#comments p").append(eval(who).fullStats.character_name + " charged.")
//                   damage = damage + 2;
//               }
//               eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//               $("#comments p").append(eval(eval(who).opposition).fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage.");
//           } else if(eval(eval(who).opposition).Defensive = "Dodge" && (eval(eval(who).opposition).fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
//               //opposition dodges
//               $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+eval(eval(who).opposition).fullStats.character_name+" dodging.");
//           } else {
//               //no defense
//               var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
//               eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//               if(eval(who).Movement != "Charge") {
//                   $("#comments p").append(eval(who).fullStats.character_name + " charged.")
//                   damage = damage + 2;
//               }
//               $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+eval(eval(who).opposition).fullStats.character_name+".");
//           }
//       }
