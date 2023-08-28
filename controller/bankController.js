const HdfcModel = require("../model/hdfcSchema");
const IciciModel = require("../model/iciciSchema");
const csv = require("csvtojson");

const login = (req, res) => {
  const userName = "pardeep";
  const password = "12345";
  const { name, pass } = req.body;

  try {
    if (!name || !pass) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all feilds" });
    }
    if (userName !== name || password !== pass) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Login successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};

const hdfc = async (req, res) => {
  try {
    let bankDetails = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (let i = 0; i < response.length; i++) {
          bankDetails.push({
            Date: response[i].Date,
            Narration: response[i].Narration,
            ValueDate: response[i].ValueDate,
            DebitAmout: response[i].DebitAmount,
            CreditAmout: response[i].CreditAmount,
            ChequeNumber: response[i].ChqNumber,
            ClosingBalance: response[i].ClosingBalance,
          });
        }

        await HdfcModel.insertMany(bankDetails);
      });

    return res
      .status(200)
      .json({ success: true, message: "Data Upload successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

const icici = async (req, res) => {
  try {
    let bankDetails = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (let i = 0; i < response.length; i++) {
          bankDetails.push({
            No: response[i].No,
            TransactionID: response[i].TransactionID,
            ValueDate: response[i].ValueDate,
            TxnPostedDate: response[i].TxnPostedDate,
            ChequeNo: response[i].ChequeNo,
            Description: response[i].Description,
            CrDr: response[i].CrDr,
            TransactionAmount: response[i].TransactionAmount,
            AvailableBalance: response[i].AvailableBalance,
          });
        }

        await IciciModel.insertMany(bankDetails);
      });

    return res
      .status(200)
      .json({ success: true, message: "Data Upload successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = { hdfc, icici, login };
