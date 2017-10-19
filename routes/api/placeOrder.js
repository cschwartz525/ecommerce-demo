var keystone = require('keystone');
var Order = keystone.list('Order');

exports = module.exports = function (req, res) {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;
	var addressLine1 = req.body.addressLine1;
	var addressLine2 = req.body.addressLine2;
	var city = req.body.city;
	var state = req.body.state;
	var zipcode = req.body.zipcode;
	var address = addressLine2 !== ''
								? `${addressLine1}, ${addressLine2}, ${city}, ${state} ${zipcode}`
								: `${addressLine1}, ${city}, ${state} ${zipcode}`;

	if (req.session.cart) {
		var newOrder = new Order.model({
			name: { first: firstName, last: lastName },
			email: email,
			address: address,
			orderId: 'abc123',
			products: [],
		});

		var updater = newOrder.getUpdateHandler(req, res, {
			errorMessage: 'There was an error creating your order',
		});

		updater.process(req.body, {
			flashErrors: false,
			logErrors: true,
		}, function (err) {
			if (err) {
				console.error(err);
			} else {
				req.session.cart = [];
				res.redirect('/');
			}
		});
	} else {
		res.redirect('/');
	}
};
