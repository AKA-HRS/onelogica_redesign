const express = require("express");
const { handleClientQuery,handleGetClientQuery } = require("../controllers/query");
const router = express.Router();

router.post("/", handleClientQuery);
router.get("/getquery", handleGetClientQuery);

module.exports = router;


