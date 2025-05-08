export default function TimeUnits({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Time & Billing Units</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">Start Time</label>
          <input
            type="time"
            name="start_time"
            value={form.start_time}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Stop Time</label>
          <input
            type="time"
            name="stop_time"
            value={form.stop_time}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Units</label>
          <input
            type="number"
            name="units"
            value={form.units}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. 2"
            min="0"
          />
        </div>
      </div>
    </div>
  );
}
