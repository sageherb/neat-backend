const axios = require("axios");
const jwt = require("jsonwebtoken");

const getGoogleUserInfo = async (accessToken) => {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const userInfo = response.data;

    return userInfo;
  } catch (error) {
    throw new Error(error);
  }
};

const generateToken = (userId, expiresIn = "7d") => {
  const secret = process.env.JWT_SECRET;
  const payload = { userId };
  const options = { expiresIn };

  return jwt.sign(payload, secret, options);
};

module.exports = { getGoogleUserInfo, generateToken };
