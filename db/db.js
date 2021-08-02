const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/bank', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
});
const Contact = mongoose.model('Contact', {
  nama: {
    type: String,
    required: true
  },
  nohp: {
    type: String,
    required: true
  },
  email: {
    type: String,
  }
})

module.exports = Contact