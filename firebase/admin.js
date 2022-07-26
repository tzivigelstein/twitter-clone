const admin = require('firebase-admin')

const serviceAccount = require('./firebase-keys.json')

!admin.apps.length &&
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })

export default admin

export const firestore = admin.firestore()
