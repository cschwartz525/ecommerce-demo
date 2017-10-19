var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'checkout';

	var totalPrice = 0;
	req.session.cart.forEach((item) => {
		totalPrice += item.price;
	});
	res.locals.totalPrice = totalPrice;
	res.locals.totalPriceString = totalPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

	// Render the view
	view.render('checkout');
};
