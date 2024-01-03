const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
  getChartData,
  getBarGraphData,
} = require("../controller/transactionController");

const router = Router();

router.route("/chartdata/:userId").get(getChartData);
router.route("/total").get(getTotalIncomeExpense);
router.route("/").post(createTransaction);
router.route("/:userId").get(getAllTransaction);

module.exports = router;
