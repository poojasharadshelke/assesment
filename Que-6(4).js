// Assuming you have a MongoDB collection called 'orders' and another collection called 'users'

// Perform an aggregate lookup to fetch orders along with corresponding user information
db.orders.aggregate([
  {
    $lookup: {
      from: 'users',        // The collection to perform the lookup on
      localField: 'userId', // The field in the 'orders' collection
      foreignField: '_id',  // The field in the 'users' collection
      as: 'user'            // The field name to store the matched user document(s)
    }
  }
]);