export default function SkillDevelopment({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Skill Development & Progress</h2>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium">Skill Deficit</label>
          <input
            type="text"
            name="skill_deficit"
            value={form.skill_deficit}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. Difficulty following directions"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Skill Developed</label>
          <input
            type="text"
            name="developed_skill"
            value={form.developed_skill}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. Improved listening"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Participants</label>
          <input
            type="text"
            name="participants"
            value={form.participants}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. Parent and child"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Visit Summary</label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="Describe what happened during the visit..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Client's Progress</label>
          <textarea
            name="clients_progress"
            value={form.clients_progress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
            placeholder="How did the client respond or progress?"
          />
        </div>
      </div>
    </div>
  );
}
