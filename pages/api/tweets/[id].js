import { firestore } from 'firebase/admin'

export default (req, res) => {
  const { id } = req.query

  firestore
    .collection('tweets')
    .doc(id)
    .get()
    .then(doc => {
      const data = doc.data()
      res.json(data)
    })
    .catch(error => {
      console.error(error)
      res.status(404).json({ msg: 'Bad request' }).end()
    })
}
