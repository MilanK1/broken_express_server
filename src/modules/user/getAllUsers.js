import User from './Models';

export default function getAllUsers(req, res) {
  User.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(400).json('GetAllUsers error, please try again!');
    });
}
