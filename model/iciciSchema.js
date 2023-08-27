const mongoose = require("mongoose");

const iciciSchema = new mongoose.Schema({
  No: {
    type: Number,
  },
  TransactionID: {
    type: String,
  },
  ValueDate: {
    type: String,
  },
  TxnPostedDate: {
    type: String,
  },
  ChequeNo: {
    type: String,
  },
  Description: {
    type: String,
  },
  CrDr: {
    type: String,
  },
  TransactionAmount: {
    type: String,
  },
  AvailableBalance: {
    type: String,
  },
});

const IciciModel = mongoose.model("Icici", iciciSchema);

module.exports = IciciModel;
