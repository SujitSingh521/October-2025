export default function TaskCard({ task }) {
  // Status color mapping
  const statusColors = {
    Completed: "bg-green-100 text-green-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Pending: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border-l-4 border-blue-500 flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="font-bold text-xl text-gray-800 mb-1">{task.title}</h2>
        <p className="text-gray-600 mb-2">{task.description}</p>
        <p className="text-gray-500 text-sm">
          <span className="font-semibold">Due:</span> {new Date(task.dueDate).toLocaleDateString()}
        </p>
      </div>
      <div className="mt-auto">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            statusColors[task.status] || "bg-gray-200 text-gray-800"
          }`}
        >
          {task.status}
        </span>
      </div>
    </div>
  );
}
