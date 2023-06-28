// Assuming you have 'users' and 'posts' models set up using a MongoDB ODM like Mongoose

// Define the 'users' schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Define the 'posts' schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  // Reference the 'users' collection
  }
});

// Create the models
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// Example query to populate the 'author' field
Post.find()
  .populate('author')  // Populates the 'author' field with user information
  .exec(function(err, posts) {
    if (err) {
      console.error(err);
    } else {
      console.log(posts);
    }
  });
