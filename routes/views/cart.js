var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'cart';

	var cartContents = {};
	req.session.cart.forEach((item) => {
		if (!cartContents[item._id]) {
			cartContents[item._id] = {
				id: item._id,
				name: item.name,
				price: item.price,
				priceString: item.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'),
				quantity: 1,
				imageUrl: item.image.url,
			};
		} else {
			cartContents[item._id].quantity++;
		}
	});
	res.locals.cartContents = cartContents;

	// Render the view
	view.render('cart');
};
