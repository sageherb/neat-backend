const express = require("express");

const User = require("../../models/User");
const { getGoogleUserInfo, generateToken } = require("../auth");

const router = express.Router();

router.post("/signin", async (req, res, next) => {
  const { accessToken } = req.body;

  try {
    const userInfo = await getGoogleUserInfo(accessToken);

    const { email, name } = userInfo;
    const currentUser = { email, name };

    const user = await User.findOneAndUpdate(
      { email },
      { $setOnInsert: currentUser },
      { new: true, upsert: true }
    );

    const token = generateToken(user._id);

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
