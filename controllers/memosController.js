const Memo = require("../models/Memo");

const createMemo = async (req, res, next) => {
  try {
    const { user } = req;
    const newMemo = new Memo({
      owner: user,
    });

    await Memo.create(newMemo);

    res.status(201).json({ memoId: newMemo._id });
  } catch (error) {
    next(error);
  }
};

module.exports = { createMemo };
