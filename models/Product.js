var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */
var Product = new keystone.List('Product');

Product.add({
	name: { type: Types.Text, required: true, index: true, initial: true },
	price: { type: Types.Number, required: true, initial: true },
	image: { type: Types.CloudinaryImage, folder: 'demo/images/products' },
	description: { type: String },
});

/**
 * Registration
 */
Product.defaultSort = '-createdAt';
Product.defaultColumns = 'name, price, description';
Product.register();
