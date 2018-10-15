const admin = require("firebase-admin");

const serviceAccount = require("./firebase-credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bridge-bot-d372a.firebaseio.com"
});

// Initialize Cloud Firestore through Firebase
const db = admin.firestore();

module.exports = {
  db
};
