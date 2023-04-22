const User = require("../models/User");
const { getGoogleUserInfo } = require("../utils/google");
const { generateToken } = require("../utils/token");

const signin = async (req, res, next) => {
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
};

module.exports = { signin };
