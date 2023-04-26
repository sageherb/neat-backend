const express = require("express");

const router = express.Router({ mergeParams: true });

const memosController = require("../../controllers/memosController");
const authenticate = require("../../middlewares/authenticate");

router.get("/", authenticate, memosController.getAllMemos);
router.post("/", authenticate, memosController.createMemo);
router.get("/:memoId", authenticate, memosController.getMemo);
router.put("/:memoId", authenticate, memosController.updateMemo);
// router.delete("/:memoId", authenticate, memosController.deleteMemo);

module.exports = router;
