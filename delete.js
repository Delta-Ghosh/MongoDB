db.inventory.deleteOne(
  { _id: ObjectId("68b1d3c137760a1d8bc190e3") }
)
// Deletes the first document that matches the filter condition (document with the specified _id)

db.inventory.deleteMany(
  {}
)
// Deletes all documents where the quantity is less than 30