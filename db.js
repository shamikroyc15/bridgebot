const firebase = require("firebase-admin");

const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_id: process.env.FIREBASE_CLIENT_ID,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  auth_uri: process.env.FIREBASE_CLIENT_ID,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
};

// Initialize Cloud Firestore through Firebase
const db = !firebase.apps.length
  ? firebase
      .initializeApp({
        credential: firebase.credential.cert(serviceAccount),
        databaseURL: "https://bridge-bot-d372a.firebaseio.com"
      })
      .firestore()
  : firebase.firestore();

module.exports = {
  db
};
