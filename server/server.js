
// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our c
const mongoose = require('mongoose')
const path = require ('path')
const passport = require('./passport');

//const mutilpart = require('connect-fileuploader')
const app = express()
const routes = require("../routes");
const PORT = process.env.PORT || 9000



// === Upload Picture === 

// const multer = require('multer');
// const Schema = mongoose.Schema;

// app.use(multer({ dest: './uploads/',
//  rename: function (fieldname, filename) {
//    return filename;
//  },
// }));

// app.post('/api/photo',function(req,res){
//  var newUser = new User();
//  newUser.img.data = fs.readFileSync(req.files.userPhoto.path)
//  newUser.img.contentType = 'image/png';
//  newUser.save();
// });

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)



// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })
// testing
// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====')
// 		next()
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	// console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
}


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
// Serve up static assets
app.use(express.static("client/build"));



// ====== Error handler ====
app.use(function(err, req, res, next) {
	// console.log('====== ERROR =======')
	// console.error(err.stack)
	res.status(500)
})

/* Express app ROUTING */
app.use('/auth', require('./auth'))

// Add routes, both API and view
app.use(routes);

//------- making mongodb public------// 
// var MONGO_URI = "mongodb://miridon:miridon@ds245548.mlab.com:45548/miridon"; 
// mongoose.connect(MONGO_URI);

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, '-- connection  error:'));
// db.once('open', () => console.log('++ mongoose connected successfully'))

//------------------------------------//



// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

