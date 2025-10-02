"use client";

import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UsersTable from "../components/UsersTable";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await fetch("/api/get-users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10 px-4">
      <UserForm refreshUsers={fetchUsers} editingUser={editingUser} setEditingUser={setEditingUser} />
      <UsersTable users={users} refreshUsers={fetchUsers} setEditingUser={setEditingUser} />
    </div>
  );
}
