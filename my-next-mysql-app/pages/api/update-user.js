import pool from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  const { id, name, email, age, city } = req.body;

  try {
    await pool.execute(
      "UPDATE users SET name = ?, email = ?, age = ?, city = ? WHERE id = ?",
      [name, email, age, city, id]
    );

    res.status(200).json({ message: "User updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error." });
  }
}
