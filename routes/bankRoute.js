const express = require("express");
const upload = require("../utils/multerUpload");
const bankController = require("../controller/bankController");

const router = express.Router();

router.post("/login", bankController.login);
router.post("/uploadhdfc", upload.single("file"), bankController.hdfc);
router.post("/uploadicici", upload.single("file"), bankController.icici);

module.exports = router;
