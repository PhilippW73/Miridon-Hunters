# Miridon-Hunters

Miridon Hunters is a game based in such a world. You can create characters, and use your character or others to fight!

Welcome to the world of Miridon, a world cruel enough that most efficient way to gain power is to consume others; yet, so capturing that you cannot leave!

## Navigation

* [Our Heroku Page](https://ancient-woodland-15037.herokuapp.com/)
* [Original Game Site](http://miridon.reuniontechnologies.com/default.asp)

### Table of contents

* [The History of Miridon](#the-history-of-miridon)
* [Use](#use)
* [Makings of](#makings-of)
* [Outside Resources Used](#outside-resources-used)
* [Future Plans](#future-plans)
* [Contributors](#contributors)


## The History of Miridon

The Dawn Of Miridon 

   Earth has long been over populated, and humanity has colonized other planets.  But with the help of technology to increase life spans and birth rates, soon many other planets became over populated as well.  Humanity has finally run out of habitable planets, even the ones that could be terraformed.  In the year 23734 A.D. they finally colonized the jungle planet Miridon.  While this planet had been found much earlier to be perfect for humans to live on, settling on Miridon had been avoided due to the strange orbit that scientists predicted would lead Miridon to crash into its own sun in the year 23739 A.D..  Lack of room on space ships and planets forced the government to send a huge colony to Miridon despite this.  The poor, the sick, the undesirables of society, and generally all those who couldn't bribe their way out were sent to the doomed planet.  Miridon was akin to a paradise before it crashed.  While it had been overpopulated, the planet had its own rich foliage and clean atmosphere.  While the birth rate was nonexistent, there was a dramatic decline in health issues.   Plants could not be started from seeds and animals could not be born, possibly for the same reason.
    The planet then crashed into its sun as predicted.  However, no one died in the crash.  The planet had formed a bubble of space in the form of a strange mist between itself and the sun.  In fact, not only had there been no deaths in the past 5 years on Miridon, but other strange effects were soon noticed.  People stopped aging around 20 (somewhere between 10 and 30) and those that were older than this started to age backwards.  There were no more diseases.  While people could feel the effects of starvation and thirst, they could not die from it.  When Miridonians finally were able to get word out to the rest of the universe in 23743 A.D., Miridon became known as the new fountain of youth.
    Those who could afford spaceships that could pass through Miridon's sun came to Miridon seeking out what they didn't have – immortality.  However, the planet was already crowded with people and ill suited for their rich and expansive lifestyles.  Miridon was cut off from the law, so the rich newcomers took control.  They paid 'Bounty Hunters' to collect bounties for them...and everyone had a bounty on their head.  While humans may have been immortal in most way, wounds still killed.
    Forty one years after the first settlers arrived on Miridon, and the planet had turned more and more decrepit.  What was once a lush forest was now a sandy desert.  Less and less towns were populated, and people lived in fear and mistrust.  And then, yet another abnormal event occurred.  An entire town disappeared with no evidence of fights or departures.  Other strange occurrences happened, and they were eventually blamed on ghosts.

A New Miridon

    In the early days of Miridon, the world changed rapidly. There were three primary changes to Miridon: the rise of the ghosts, the ravaging of the lands, and the sudden immortality gained by the Miridonians.
    The mist that was guarding the planet from the suns rays was growing. While the initial mist was great at keeping the sun’s heat from the planet, significant amounts of the mist would cause any person to quickly go insane. These incidents quickly destroyed most of the southern half of the world, and denizens were forced to retreat northward. In response to this, domes were built to keep the mist away from the society. These domes were not even enough, as mist began to take semi-physical forms known to the Miridonians as ghosts. These creatures were able to use powerful magic in their ethereal state, as well as possess almost any object, living or inanimate, and began to terrorize the world.
    With an inability of getting food from an outside source, Miridonians quickly ravaged the land for any potential resources, leaving the northern portion of the planet a bare wasteland. The Miridonians soon exhausted every food source available, plant and animal alike. The intense hunger was too much for most Miridonians, and human societies began to see each other as food. Cannibalism became the staple diet on Miridon, and many of the weaker denizens were forced to band together to fight off this growing threat. Thus, towns were made, living by the strict law of Miridon, where anybody from the town was safe from harm, and all outsiders were to be killed and eaten on sight.
    It quickly became apparent that the mystical affects of Miridon had become even stronger. Miridonians completely stopped aging, getting sick, and having children, and produce stopped growing completely. More importantly, after the lands were ravaged it was found that Miridonians did not need to eat to survive any more, as their energy never seemed to deplete. Food only served a few purposes, namely curbing the horrible hunger that Miridonians constantly felt, regenerating wounds received in battle, and gaining valuable muscles mass and flexibility. The last affect was so significant, that Miridonians who ate regularly soon found themselves gaining godly strength and speed. The godlike strength of Miridonians became a staple of the culture, quickly surpassing the need for any technology on the planet as nothing could surpass the raw power of humanity.

Check out miridon website for player's handbook to be proficient in the game and more detail about the world including Factions, Cities and Districts, and Exchange rates!!!
http://miridon.reuniontechnologies.com/

# Use

The online game is found at [our heroku page](https://ancient-woodland-15037.herokuapp.com/)

* Login/Sign Up
  * Sign up or Login
  * Uses Passport to keep track of user's information and presence.
* User Profile
  * Create or update your profile!
* Character Creation
  * Create a character!
  * Choose a class, weapon, and distibute stat points. You start with 4 additional ones beyond the initial classes...as we are a bit more generous than the initial game.
* Character Selection
  * Choose a character from those listed in our database
  * View a character's information
* Battle
  * Your chosen character will battle a character against an opponent close to your win percentage + or - 10%.
  * If there are a lot of characters, this means the more you win, the more likely you will fight others with higher win percentages. You won't fight the same opponent too often, but will generally fight the same set of opponents...until winning or losing changes your percentages.
  * Winning a battle changes your percentages and gets you loot! As in this game no opponents die, you do not get all their stuff... You get 20% of the rewards, including everything they have on them and everything they have IN them (remember how we mentioned cannibalism?)
  * Losing updates percentages, but not loot. While this may change in the future, for now there is a steady increase in materials for everyone.
* Upgrades/Shop
  * Spend your ill-gotten gains! Or rightfully gotten... in this world, who knows?
  * While there is a currency, mostly people use a barter system. So here you can barter one material for another.
  * Use Meat/Protein or Produce to boost your stats! Meat makes you stronger, produce makes you faster.
  * Use Steel to make weapons. In the future there will be other materrials to make weapons, but steel is the go to for many people...

# Dependencies
This is a yarn and react app.

* axios
* bcrypt
* bcryptjs
* body-parser
* connect-mongo
* dotenv
* emoji-js
* emoji-picker
* express
* express-fileuploader
* express-session
* mongoose
* morgan
* multer
* passport
* passport-local
* prop-types
* react
* react-bootstrap
* react-burger-menu
* react-dom
* react-router-dom
* routes
* concurrently
* react-scripts

## Outside Resources Used
http://miridon.reuniontechnologies.com/


## Future Plans
Fully implement the game according to design available on the miridon website.
- implement more items and equipment
- implement currency and shops
- implement kills and abiities
- implement class(character class) specialties 
- implement multi-player battles
- turn the game into using a 2-D map.

And continuing to update to include more and more of the game.

## Contributors
* Anna Bruestle
* Joonho Lee
* Priya Polla (Version 1)
* Philipp Wickart
* Chanel Williams (Version 2)
* Geony Ayyad (Version 2)

### Contributing
We welcome new contributors! If you have suggestions, please tell us!