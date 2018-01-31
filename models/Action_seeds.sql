INSERT INTO Action ( name, actionType, category, function, strength_cost, speed_cost, subtlety_mod ) VALUES
( "Arm Trap", "Offensive", "skills", "Use [Tech Training] to arm a trap", 1, 4, -5 ),
( "Disarm Trap", "Offensive", "skills", "Use [Tech Training] to disarm a trap", 1, 4, -5 ),
( "Initiate Grapple", "Offensive", "skills", "Attempt to initiate grapple", 1, 1, -10 ),
( "Channel Spell", "Offensive", "spells", "Reduce remaining [Spell Cast Time] by 1", 0, 0, null ),
( "Shield Block", "Offensive", "skills", "Apply the defensive bonuses from a shield
to a [Block], [Heavy Block] or [Super Block] action", 0, 0, null ),
( "Restore Strength Points", "Offensive", "basics", "Restore some [Current Strength Points]", 0, 0, 10 ),
( "Sidestep", "Movement", "movement", "Move 5 ft in any direction
and face any direction", 0, 1, 10 ),
( "Fast
Sidestep", "Movement", "movement", "Move 10 ft in any direction
and face any direction", 0, 3, 0 ),
( "Charge", "Movement", "movement", "Turn up to 60°
Run Forward 10 ft
Add [Weapon Weight] damage to a [Melee Attack] or [Melee Combo Attack]
performed in the same action block
and face that direction", 0, 1, 0 ),
( "Fast Charge", "Movement", "movement", "Turn up to 60°
Run Forward 20 ft
Add 2*[Weapon Weight] damage to a [Melee Attack] or [Melee Combo Attack]
performed in the same action block
and face that direction", 0, 2, -10 ),
( "Teleport", "Movement", "movement", "Teleport up to 5 ft*[Teleport]
in any direction
and face any direction.
Spend 1 [Ghost HP] per foot.", 0, 0, 10 ),
( "Turn", "Movement", "movement", "Turn to face any direction", 0, 0, - ),
( "Battle Communication", "Verbal", "allies", "Communicate with your allies", 0, 0, -10 ),
( "Stunning Scream", "Verbal", "basics", "Attempt to stun a target", 1, 0, -10 ),
( "Battle Strategy", "Verbal", "allies", "Attempt to coordinate an attack", 1, 0, -10 ),
( "Taunt", "Verbal", "allies", "Attempt to draw a target's attention", 1, 0, -10 ),
( "Stealth", "Verbal", "skills", "Enter [Stealth] state", 1, 0, -10 ),
( "Veil", "Verbal", "spells", "Disguise a spell", 1, 0, -10 ),
( "False Reload", "Verbal", "skills", "Pretend to reload a weapon", 1, 0, null ),
( "False Weakness", "Verbal", "skills", "Expose a false weakness", 1, 0, null ),
( "Cast Spell", "Verbal", "spells", "Begin casting a spell", 5, 5, null ),
( "Echo Spell", "Verbal", "spells", "Begin casting a spell with special rules.", 3, 0, null ),
( "Heavy Block", "Defensive", "movement", "-10 to damage received
Ignore 10ft knock back", 4, 0, null ),
( "Super Block", "Defensive", "movement", "-15 to damage received
Ignore 20ft knock back", 6, 0, null ),
( "Riposte", "Defensive", "skills", "Dodge and perform the [Riposte] special ability", 1, 1, 10 ),
( "Shorten Spell 1", "Spell Casting Modifier", "spells", "Reduces the [Spell Cast Time]
of a spell by 1 action block", 0, 5, null ),
( "Shorten Spell 2", "Spell Casting Modifier", "spells", "Reduces the [Spell Cast Time]
of a spell by 2 action blocks", 0, 15, null ),
( "Recover Ghost HP", "Spell Casting Modifier", "spells", "Recover 1 [Spell Ghost HP]
using Strength Points", 1, 0, null ),
( "Recover Ghost HP", "Spell Casting Modifier", "spells", "Recover 1 [Spell Ghost HP]
using Speed Points", 0, 1, null ),
( "Melee Attack", "Offensive", "basics", "Attack with melee weapon
See Weapon for damage/to hit", 2, 1, -5 ),
( "Melee Combo Attack", "Offensive", "basics", "Act as [Melee Attack]
Must follow another [Melee Attack]
or [Melee Combo Attack]", 1, 2, -5 ),
( "Gun Attack", "Offensive", "basics", "See Weapon for damage/to hit", 0, 2, 5 ),
( "Aimed Attack", "Offensive", "basics", "Attack with gun
Act as [Gun Attack]
+3 to hit", 0, 3, 5 ),
( "Reload", "Offensive", "basics", "Reloads a Gun to Full Ammo", 1, 0, null ),
( "Restore Speed Points", "Movement", "basics", "Restore some [Current Speed Points]", 0, 0, null ),
( "Block", "Defensive", "basics", "-5 to damage received
Ignore 5ft knock back", 2, 0, null ),
( "Obstruct Movement", "Defensive", "basics", "Cancel a [Movement Action]", 1, 0, null ),
( "Dodge", "Defensive", "basics", "Reduce an attack's [To Hit] roll
by the character's [Dodge Boost]", 0, 1, null );