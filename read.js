db.inventory.find({}) // Retrieves all documents in the "inventory" collection
db.inventory.find({ item: "journal" }) // Finds documents where the item is "journal"
db.inventory.find({ qty: { $gt: 30 } }) // Finds documents where quantity is greater than 30. $gt means greater than.
db.inventory.find({ qty: { $lt: 30 } }) // Finds documents where quantity is greater than 30. $gt means less than.
db.inventory.find({ tags: "red" }) // Finds documents where the tags array contains "red"
db.inventory.find({ size: { h: 14, w: 21, uom: "cm" } }) // Finds documents with an exact match for the size object
db.inventory.find({}, { item: 1, qty: 1, _id: 0 }) // Projects only the item and qty fields, excluding _id
db.inventory.find({tags: {$in:["red","gray"]}}) // Finds documents where the tags array contains either "A" or "D"

// Logical Operators
db.inventory.find({ $and: [ { qty: { $gt: 30 } }, { item: "mat" } ] }) // Finds documents where qty > 30 AND item is "mat"
db.inventory.find({ $or: [ { qty: { $lt: 30 } }, { item: "journal" } ] }) // Finds documents where qty < 30 OR item is "journal"
db.inventory.find({ $not: { qty: { $gt: 30 } } }) // Finds documents where qty is NOT greater than 30
db.inventory.find({ $nor: [ { qty: { $lt: 30 } }, { item: "journal" } ] }) // Finds documents where neither condition is true