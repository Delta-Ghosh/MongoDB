db.inventory.find({ qty: { $lt: 100 } }).sort({ qty: 1 }) // Sorts documents with qty less than 100 in ascending order based on qty
db.inventory.find({ qty: { $lt: 100 } }).sort({ qty: -1 }) // Sorts documents with qty less than 100 in descending order based on qty
//limit the number of results
db.inventory.find({ qty: { $lt: 100 } }).sort({ qty: -1 }).limit(2) // Sorts documents with qty less than 100 in descending order based on qty and limits the result to 2 documents
db.inventory.find({ qty: { $lt: 100 } }).sort({ item: 1, qty: -1 }) // Sorts documents with qty less than 100 in ascending order based on item and descending order based on qty
//skip a number of results
db.inventory.find({ qty: { $lt: 100 } }).sort({ item: 1, qty: -1 }).skip(2).limit(2) // Sorts documents with qty less than 100 in ascending order based on item and descending order based on qty, skips the first 2 documents, and limits the result to 2 documents


using pagination skip and limit
const pageSize = 2; // Number of documents per page
const pageNumber = 2; // Page number (1-based index)
db.inventory.find({ qty: { $lt: 100 } })
  .sort({ item: 1, qty: -1 }) // Sort by item ascending and qty descending
  .skip((pageNumber - 1) * pageSize) // Skip documents for previous pages
  .limit(pageSize); // Limit to page size
// This query retrieves the second page of results with 2 documents per page, sorted by item in ascending order and qty in descending order.