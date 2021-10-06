const Person = require("../models/User");

//find users
exports.getUsers = async (req, res) => {
  try {
    const allUsers = await Person.find();
    res.send({ msg: "find all Users", user: allUsers });
  } catch (error) {
    res.status(400).send({ msg: "can not get Users", error });
  }
};

//find 1 user
exports.getUser = async (req, res) => {
  try {
    const oneUser = await User.findById(req.params._id);
    res.send({ msg: "user found", user: oneUser });
  } catch (error) {
    res.status(400).send({ msg: "could not get user", error });
  }
};

// add new user
exports.addUser = async (req, res) => {
  try {
    const addUser = new User({ ...req.body });
    await addUser.save();
    res.send({ msg: "user added", user: addUser });
  } catch (error) {
    res.status(400).send({ msg: "could not add user", error });
  }
};

exports.editUser = async (req, res) => {
  try {
    const editedUser = await User.updateOne(
      { _id: req.params._id },
      { $set: { ...req.body } }
    );
    console.log(editedUser);
    if (editedUser.modifiedCount) {
      return res.send({ msg: "updated" });
    }
    res.send({ msg: "there is no modification" });
  } catch (error) {
    res.send({ msg: "can not modify it" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findOneAndRemove({ _id: req.params._id });
    res.send({ msg: "User deleted", user: deleteUser });
  } catch (error) {
    res.status(400).send({ msg: "could not delete", error });
  }
};
