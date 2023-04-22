const axios = require("axios");

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

module.exports = { getGoogleUserInfo };
