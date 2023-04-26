const Memo = require("../models/Memo");

const getAllMemos = async (req, res, next) => {
  try {
    const { user } = req;
    const offset = parseInt(req.query.offset, 10) || 0;
    const limit = parseInt(req.query.limit, 10) || 10;

    const memos = await Memo.find({ owner: user })
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);

    res.status(200).json({ memos });
  } catch (error) {
    next(error);
  }
};

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

module.exports = { getAllMemos, createMemo, updateMemo };
