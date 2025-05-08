export default function VisitFlags({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Visit Checkboxes & Location</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Safety Checkbox */}
        <div>
          <label className="block text-sm font-medium">Safety Concerns</label>
          <select
            name="safety_checkbox"
            value={form.safety_checkbox}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select...</option>
            <option value="No Safety Concerns">No Safety Concerns</option>
            <option value="Safety Concerns Noted">Safety Concerns Noted</option>
          </select>
        </div>

        {/* Abuse/Neglect Checkbox */}
        <div>
          <label className="block text-sm font-medium">Abuse or Neglect</label>
          <select
            name="abuse_checkbox"
            value={form.abuse_checkbox}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select...</option>
            <option value="No Abuse or Neglect">No Abuse or Neglect</option>
            <option value="Suspected Abuse or Neglect">Suspected Abuse or Neglect</option>
          </select>
        </div>

        {/* Location Checkbox */}
        <div>
          <label className="block text-sm font-medium">Visit Location</label>
          <select
            name="location_checkbox"
            value={form.location_checkbox}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select...</option>
            <option value="DHHR">DHHR</option>
            <option value="Home">Home</option>
            <option value="School">School</option>
            <option value="Community">Community</option>
          </select>
        </div>
      </div>
    </div>
  );
}

