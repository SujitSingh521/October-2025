import pool from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, age, city } = req.body;

  try {
    await pool.execute(
      "INSERT INTO users (name, email, age, city) VALUES (?, ?, ?, ?)",
      [name, email, age, city]
    );

    res.status(200).json({ message: "User added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error." });
  }
}
