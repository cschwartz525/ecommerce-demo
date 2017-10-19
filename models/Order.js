var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Order Model
 * ==========
 */
var Order = new keystone.List('Order', { nocreate: true, noedit: true });

Order.add({
	name: { type: Types.Name, required: true, initial: true },
	email: { type: Types.Email, required: true, initial: true },
	address: { type: String, required: true, initial: true },
	orderId: { type: String, required: true, initial: true },
	timestamp: { type: Types.Datetime, default: Date.now },
	products: { type: Types.Relationship, ref: 'Product', many: true, required: true, initial: true },
});

/**
 * Registration
 */
Order.defaultSort = '-timestamp';
Order.defaultColumns = 'name, email, address, orderId, products, timestamp';
Order.register();
