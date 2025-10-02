import pool from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();

  const { id } = req.body;

  try {
    await pool.execute("DELETE FROM users WHERE id = ?", [id]);
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error." });
  }
}
