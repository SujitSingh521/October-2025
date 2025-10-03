export default function ContactCard({ contact }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{contact.name}</h2>
      <p className="text-gray-600">{contact.email}</p>
      <p className="text-gray-600">{contact.phone}</p>
      <p className="text-gray-500 text-sm">Company: {contact.company}</p>
    </div>
  );
}
