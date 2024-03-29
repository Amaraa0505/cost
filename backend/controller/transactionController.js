const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const { user_id } = req.params;
  try {
    const transactions = await sql`  /// ymar uyd await
      SELECT tr.name, tr.amount, tr.createdAt, tr.id, tr.transaction_type, ct.name, ct.color FROM transaction tr 
      INNER JOIN category ct ON tr.category_id=ct.id WHERE tr.user_id=${user_id} ORDER BY createdAt DESC`; /// role of inner join
    res.status(201).json({ message: "success", transactions });
  } catch (error) {
    console.log("ERR", error);
  }
};
{
}

const createTransaction = async (req, res) => {
  try {
    const { user_id, name, amount, transaction_type, updatedAt, category_id } =
      req.body;

    const data = await sql`
        INSERT INTO transaction(user_id, category_id, name, amount,  transaction_type, updatedAt) VALUES(${user_id}, ${category_id}, ${name}, ${amount}, ${transaction_type}, ${updatedAt}) RETURNING *`; // why id is teturning
    res.status(201).json({ message: "success", transaction: data[0] });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const getBarGraphData = async (req, res) => {
  try {
    const { user_id } = req.params;
    const barGraphData = await sql` 
      SELECT
        EXTRACT(YEAR FROM updatedAt) AS year,  
        EXTRACT(MONTH FROM updatedAt) AS month,
        transaction_type,
        SUM(amount) AS total_amount
      
      FROM
        transaction
      GROUP BY
        transaction_type, year, month;
    `;
    console.log(barGraphData);
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
  }
};

const getTotalIncomeExpense = async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log("USER===>");
    const data =
      await sql`SELECT transaction_type, SUM(amount) as total FROM transaction GROUP BY transaction_type`;
    const [inc] = data.filter((el) => el.transaction_type === "INC");
    const [exp] = data.filter((el) => el.transaction_type === "EXP");
    res.status(201).json({
      message: "success",
      totalIncome: inc.total,
      totalExpense: exp.total,
    });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const getChartData = async (req, res) => {
  try {
    // const { userId } = req.params;

    const doughnutChart = await sql`
      SELECT 
        ct.name as category_name, 
        SUM(amount) as total 
      FROM transaction tr 
      INNER JOIN 
        category ct ON tr.category_id=ct.id
      GROUP BY category_name;`;

    const barChart = await sql`
      SELECT
        EXTRACT(MONTH FROM updatedAt) AS month,
        TO_CHAR(updatedAt, 'Month') AS month_name,
        SUM(CASE WHEN transaction_type = 'INC' THEN amount ELSE 0 END) AS income,
        SUM(CASE WHEN transaction_type = 'EXP' THEN amount ELSE 0 END) AS expense
      FROM
          transaction
      GROUP BY
          month, month_name
      ORDER BY
          month;
      `;
    // console.log("data", doughnutChart);
    // console.log("data", barChart);
    const labels = barChart.map((row) => row.month_name);
    const incomeData = barChart.map((row) => row.income);
    const expenseData = barChart.map((row) => row.expense);

    const dLabels = doughnutChart.map((e) => e.category_name);
    const data = doughnutChart.map((e) => e.total);

    res.status(201).json({
      message: "success",
      doughnutChart: { labels: dLabels, data },
      barChart: {
        labels,
        incomeData,
        expenseData,
      },
    });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
  getChartData,
  getBarGraphData,
};
