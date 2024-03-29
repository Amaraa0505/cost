const { sql } = require("../config/pgDb");

const updateUser = async (req, res) => {
  try {
    const { currency_type, balance } = req.body;
    const { userId } = req.params;
    const data = await sql`
    UPDATE users SET currency_type=${currency_type}, balance=${balance} WHERE id=${userId} RETURNING *`;
    const { password, ...user } = data[0];
    res.status(200).json({ message: "success", user });
  } catch (error) {
    res.status(500).json({ message: " failed" });
  }
};

module.exports = { updateUser };
