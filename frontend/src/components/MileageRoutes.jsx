function RouteBlock({ routeName, routeData, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(routeName, { ...routeData, [name]: value });
  };

  return (
    <div className="p-3 border rounded bg-gray-50 space-y-2">
      <h3 className="font-medium mb-2 capitalize">{routeName.replace("_", " ")}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <input name="from" value={routeData.from || ""} onChange={handleChange} placeholder="From" className="p-2 border rounded" />
        <input name="to" value={routeData.to || ""} onChange={handleChange} placeholder="To" className="p-2 border rounded" />
        <input name="at_start" value={routeData.at_start || ""} onChange={handleChange} placeholder="AT Start" className="p-2 border rounded" />
        <input name="at_stop" value={routeData.at_stop || ""} onChange={handleChange} placeholder="AT Stop" className="p-2 border rounded" />
        <input name="it_start" value={routeData.it_start || ""} onChange={handleChange} placeholder="IT Start" className="p-2 border rounded" />
        <input name="it_stop" value={routeData.it_stop || ""} onChange={handleChange} placeholder="IT Stop" className="p-2 border rounded" />
      </div>
    </div>
  );
}

export default function MileageRoutes({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRouteChange = (routeName, newData) => {
    setForm({ ...form, [routeName]: newData });
  };

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Mileage & Routes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium">Miles</label>
          <input
            type="number"
            name="miles"
            value={form.miles}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Adult Transport Units</label>
          <input
            type="number"
            name="at_units"
            value={form.at_units}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Infant Transport Units</label>
          <input
            type="number"
            name="it_units"
            value={form.it_units}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
          />
        </div>
      </div>

      <div className="space-y-4">
        <RouteBlock routeName="route_1" routeData={form.route_1} onChange={handleRouteChange} />
        <RouteBlock routeName="route_2" routeData={form.route_2} onChange={handleRouteChange} />
        <RouteBlock routeName="route_3" routeData={form.route_3} onChange={handleRouteChange} />
      </div>
    </div>
  );
}
