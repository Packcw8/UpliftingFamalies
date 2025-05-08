export default function VisitDetails({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Visit Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Service Provided Dropdown */}
        <div>
          <label className="block text-sm font-medium">Service Provided</label>
          <select
            name="service_provided"
            value={form.service_provided}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a service</option>
            <option value="SV">Supervised Visit</option>
            <option value="AT">Adult Transport</option>
            <option value="IT">Infant Transport</option>
          </select>
        </div>

        {/* Completion Status */}
        <div>
          <label className="block text-sm font-medium mb-1">Completion Status</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="completion_status"
                value="Completed"
                checked={form.completion_status === "Completed"}
                onChange={handleChange}
              />
              <span className="ml-2">Completed</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="completion_status"
                value="Attempted"
                checked={form.completion_status === "Attempted"}
                onChange={handleChange}
              />
              <span className="ml-2">Attempted</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
