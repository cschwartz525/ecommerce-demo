var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Order Model
 * ==========
 */
var Order = new keystone.List('Order', { nocreate: true, noedit: true });

Order.add({
	customer: { type: Types.Relationship, ref: 'User', many: false, required: true, initial: true },
	products: { type: Types.Relationship, ref: 'Product', many: true, required: true, initial: true },
});

/**
 * Registration
 */
Order.defaultSort = '-createdAt';
Order.defaultColumns = 'customer, products';
Order.register();
