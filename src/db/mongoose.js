const mongoose = require("mongoose");
try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
  });
} catch (err) {
  console.log(err);
}

module.exports = mongoose;
