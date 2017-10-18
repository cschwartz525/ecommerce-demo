var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function (req, res) {
	var expressRes = res;

	var productId = req.params.id;
	Product.model.findById(productId)
		.exec(function (err, product) {
			console.log(`Product ${productId} added to cart`);
			req.session.cart.push(product);
		})
		.then(function (arg) {
			expressRes.redirect('/store');
		});
};
