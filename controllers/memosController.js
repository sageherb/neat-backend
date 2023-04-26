const Memo = require("../models/Memo");

const getAllMemos = async (req, res, next) => {
  try {
    const { user } = req;
    const offset = parseInt(req.query.offset, 10) || 0;
    const limit = parseInt(req.query.limit, 10) || 20;

    const memos = await Memo.find({ owner: user })
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .lean();

    res.status(200).json({ memos });
  } catch (error) {
    next(error);
  }
};

const createMemo = async (req, res, next) => {
  try {
    const { user } = req;
    const memo = new Memo({
      owner: user,
      content: "",
    });

    await Memo.create(memo);

    res.status(201).json({ memo });
  } catch (error) {
    next(error);
  }
};

const getMemo = async (req, res, next) => {
  try {
    const { memoId } = req.params;

    const memo = await Memo.findById(memoId).lean();

    res.status(200).json({ memo });
  } catch (error) {
    next(error);
  }
};

const updateMemo = async (req, res, next) => {
  try {
    const { memoId } = req.params;
    const { content } = req.body;

    const memo = await Memo.findByIdAndUpdate(
      memoId,
      { content },
      { returnDocument: "after" }
    ).lean();

    res.status(200).json({ memo });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllMemos, createMemo, getMemo, updateMemo };
