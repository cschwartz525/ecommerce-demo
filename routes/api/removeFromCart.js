exports = module.exports = function (req, res) {
	var productId = req.params.id;
	for (var i = 0; i < req.session.cart.length; i++) {
		if (req.session.cart[i]._id === productId) {
			req.session.cart.splice(i, 1);
			break;
		}
	}

	res.redirect('/cart');
};
