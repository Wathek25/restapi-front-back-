const express = require("express");
const {
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
} = require("../controllers/user.controllers");
const router = express.Router();

router.get("/", getUsers);

router.get("/:_id", getUser);

//people (add)
router.post("/", addUser);

router.put("/:_id", editUser);

router.delete("/:_id", deleteUser);

module.exports = router;
