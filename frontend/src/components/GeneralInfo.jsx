export default function GeneralInfo({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">General Case Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Case Name</label>
          <input
            type="text"
            name="case_name"
            value={form.case_name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. Juanita Gray"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Case Number</label>
          <input
            type="text"
            name="case_number"
            value={form.case_number}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. 195552"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Service Date</label>
          <input
            type="date"
            name="service_date"
            value={form.service_date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Signature</label>
          <input
            type="text"
            name="signature"
            value={form.signature}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. Cody Pack"
          />
        </div>
      </div>
    </div>
  );
}
