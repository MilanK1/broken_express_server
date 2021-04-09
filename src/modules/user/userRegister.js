import User from './Models';

export default function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.passowrd,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json('User has been created! Congrads');
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json('There was an error while creating the user! Try again later!');
    });
}
