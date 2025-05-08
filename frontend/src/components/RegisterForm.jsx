import { useState } from "react";

const agencyList = ["WV Family First", "Helping Hands", "Safe Start"];

export default function RegisterForm({ onSubmit }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    full_name: "",
    role: "provider",
    agency: agencyList[0]
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Register</h2>

      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="full_name" type="text" placeholder="Full Name" value={form.full_name} onChange={handleChange} className="w-full p-2 border rounded" required />

      <select name="agency" value={form.agency} onChange={handleChange} className="w-full p-2 border rounded">
        {agencyList.map((agency) => (
          <option key={agency} value={agency}>{agency}</option>
        ))}
      </select>

      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        Create Account
      </button>
    </form>
  );
}
