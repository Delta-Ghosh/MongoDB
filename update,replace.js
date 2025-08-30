db.inventory.updateOne(
   { item: "mousepad" },
   {
     $set: { "size.uom": "cm", status: "P" },
     $currentDate: { lastModified: true }
   }
) // Updates the first document where item is "mousepad", sets size.uom to "cm" and status to "P", and updates lastModified to the current date
db.inventory.replaceOne(
  { _id: ObjectId("68b1d3c137760a1d8bc190e3") },  // filter
  {
    item: "mousepad",
    qty: 30,
    tags: ["gel", "blue"],
    size: { h: 19, w: 22.85, uom: "cm" },
    lastModified: new Date(),
    status: "A"
  }
)
// Replaces the entire document with the specified _id with a new document