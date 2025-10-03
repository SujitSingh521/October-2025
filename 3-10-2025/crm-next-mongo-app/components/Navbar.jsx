"use client"; 

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) setUserInfo(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center p-4 shadow">
      <div className="text-2xl font-bold">
        <Link href="/">MyCRM</Link>
      </div>
      <div className="flex items-center gap-4">
        {userInfo ? (
          <>
            <span>Welcome, {userInfo.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
