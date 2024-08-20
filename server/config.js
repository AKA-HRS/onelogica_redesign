const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccount = require("./serviceAccount.json");
// const serviceAccount = process.env.SERVICE_ACCOUNT;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://onelogica-684da.appspot.com",
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };
