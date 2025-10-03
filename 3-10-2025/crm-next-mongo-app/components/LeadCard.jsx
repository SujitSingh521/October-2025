export default function LeadCard({ lead }) {
  // Status color based on lead status
  const statusColors = {
    New: "bg-blue-100 text-blue-800",
    Contacted: "bg-yellow-100 text-yellow-800",
    Qualified: "bg-green-100 text-green-800",
    Lost: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border-l-4 border-blue-500">
      <h2 className="font-bold text-xl mb-2 text-gray-800">{lead.name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Email:</span> {lead.email}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Source:</span> {lead.source}
      </p>
      <span
        className={`px-3 py-1 rounded-full text-sm font-semibold ${
          statusColors[lead.status] || "bg-gray-200 text-gray-800"
        }`}
      >
        {lead.status}
      </span>
    </div>
  );
}
