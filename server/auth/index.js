const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const passport = require('../passport')


// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	// console.log('===== user!!======')
	// console.log(req);
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.send({ user: null })
	}
})

router.post(
	'/login',
	function(req, res, next) {
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		// console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			// console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
		console.log("******************************");
		console.log(user);
	}
)

router.get('/logout', (req, res) => {
	// if (req.user) {
	// 	req.session.destroy()
	// 	res.clearCookie('connect.sid') // clean up!
	// 	return res.json({ msg: 'logging you out' })
	// } else {
	// 	return res.json({ msg: 'no user to log out!' })
	// }
	console.log('logout route executed!');
	req.logOut();
	console.log('It logged out!');
	res.redirect("/");
})

router.post('/signup', (req, res) => {
	console.log("MADE IT TO /auth/signup");
	const { username, password, email, bio } = req.body
	// ADD VALIDATION
	User.findOne({ 'local.email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the email: ${email}`
			})
		}
		const newUser = new User({
			'local.username': username,
			'local.password': password,
			'local.email': email,
			'bio': bio
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

module.exports = router
