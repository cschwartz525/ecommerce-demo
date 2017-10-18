var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'store';
	view.on('init', function (next) {
		Product.paginate({
			page: req.query.page || 1,
			perPage: 5,
			maxPage: 10,
		})
		.exec(function (err, res) {
			locals.products = res.results.map((x) => {
				return {
					id: x._id,
					name: x.name,
					price: x.price,
					priceString: x.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'),
					imageUrl: x.image.url,
				};
			});
			next(err);
		});
	});

	// Render the view
	view.render('store');
};
