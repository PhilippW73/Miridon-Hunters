//       function charge(who) {
//           if(eval(who).curStats.speed_point > 0 ) {
//               eval(who).curStats.speed_point--;
//               $("#comments p").append(eval(who).fullStats.character_name + " charged. ");
//           } else {
//               $("#comments p").append(eval(who).fullStats.character_name+" did not have enough strength to charge. They attempt to gather speed. ");
//               restoreSpeed(who);
//           }
//       }