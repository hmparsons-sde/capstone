const firebaseConfig = {
  localApiKey: process.env.REACT_APP_API_KEY_LOCAL,
  externalApiKey: process.env.REACT_APP_API_KEY_EXTERNAL,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  localDbURL: process.env.REACT_APP_DATABASE_URL_LOCAL,
  externalDbURL: process.env.REACT_APP_DATABASE_URL_EXTERNAL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export default firebaseConfig;
