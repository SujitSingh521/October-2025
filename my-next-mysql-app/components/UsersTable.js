"use client";

export default function UsersTable({ users }) {
  const userList = Array.isArray(users) ? users : [];

  return (
    <div className="mt-10 w-full max-w-4xl overflow-x-auto shadow-2xl rounded-xl">
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white">
          <tr>
            <th className="py-3 px-6 text-left font-semibold uppercase">ID</th>
            <th className="py-3 px-6 text-left font-semibold uppercase">Name</th>
            <th className="py-3 px-6 text-left font-semibold uppercase">Email</th>
            <th className="py-3 px-6 text-left font-semibold uppercase">Age</th>
            <th className="py-3 px-6 text-left font-semibold uppercase">City</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userList.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500">
                No users found.
              </td>
            </tr>
          ) : (
            userList.map((user, index) => (
              <tr
                key={user.id}
                className={`hover:bg-gray-50 transition-all duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="py-3 px-6">{user.id}</td>
                <td className="py-3 px-6 font-medium text-gray-700">{user.name}</td>
                <td className="py-3 px-6 text-gray-600">{user.email}</td>
                <td className="py-3 px-6">{user.age}</td>
                <td className="py-3 px-6">{user.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
