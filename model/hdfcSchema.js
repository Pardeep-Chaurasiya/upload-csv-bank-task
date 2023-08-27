const mongoose = require("mongoose");

const hdfcSchema = new mongoose.Schema({
  Date: {
    type: String,
  },
  Narration: {
    type: String,
  },
  ValueDate: {
    type: String,
  },
  DebitAmout: {
    type: String,
  },
  CreditAmout: {
    type: String,
  },
  ChequeNumber: {
    type: String,
  },
  ClosingBalance: {
    type: String,
  },
});

const HdfcModel = mongoose.model("Hdfc", hdfcSchema);

module.exports = HdfcModel;
