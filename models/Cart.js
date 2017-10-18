var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Cart Model
 * ==========
 */
var Cart = new keystone.List('Cart', { nocreate: true, noedit: true });

Cart.add({
	products: { type: Types.Relationship, ref: 'Product', many: true, required: true, initial: true },
	totalQty: { type: Types.Number, initial: true, required: true, index: true },
	totalPrice: { type: Types.Number, initial: true, required: true, index: true },
});

/**
 * Registration
 */
Cart.defaultSort = '-createdAt';
Cart.defaultColumns = 'products, totalQty, totalPrice';
Cart.register();
