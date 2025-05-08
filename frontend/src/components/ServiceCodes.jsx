const AVAILABLE_CODES = [
  { value: "SV01", label: "Supervised Visit - Standard" },
  { value: "SV02", label: "Supervised Visit - Therapeutic" },
  { value: "AT01", label: "Adult Transport" },
  { value: "IT01", label: "Infant Transport" },
  { value: "ED01", label: "Education Support" },
  { value: "PA01", label: "Parenting Assistance" },
  // Add more as needed
];

export default function ServiceCodes({ form, setForm }) {
  const handleCodeChange = (e) => {
    const { value, checked } = e.target;
    const updatedCodes = checked
      ? [...form.codes, value]
      : form.codes.filter((code) => code !== value);
    setForm({ ...form, codes: updatedCodes });
  };

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Service Codes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {AVAILABLE_CODES.map((code) => (
          <label key={code.value} className="flex items-center">
            <input
              type="checkbox"
              name="codes"
              value={code.value}
              checked={form.codes.includes(code.value)}
              onChange={handleCodeChange}
              className="mr-2"
            />
            {code.label} ({code.value})
          </label>
        ))}
      </div>
    </div>
  );
}
