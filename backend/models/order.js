const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
  sender: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
  },
  recipient: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
  },
  status: { type: String, enum:{values:['awaiting payment', 'payment success', 'payment failed',' order in progress', 'order completed'], message:'this value is not supported'}, required: true },
  products: { type: Array, required: true },
  payment: {
    msisdn: { type: String, required: true },
    mno: { type: String, required: true, enum:{
      values:['MTN', 'ZEEPAY', 'VODAFONE']
    }},
  },
  delivery: {
    cost: {type: Number, required:true},
    location: {type: String, required:true}
  },  
  total_price: { type: String, required: true },
  created_at: {type: Date, required:true}
});

module.exports = mongoose.model('Order', OrderSchema)
