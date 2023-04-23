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

const updateMemo = async (req, res, next) => {
  try {
    const { memoId } = req.params;
    const { content } = req.body;

    await Memo.findByIdAndUpdate(memoId, { content });

    res.status(200).json({ memoId });
  } catch (error) {
    next(error);
  }
};

module.exports = { createMemo, updateMemo };
