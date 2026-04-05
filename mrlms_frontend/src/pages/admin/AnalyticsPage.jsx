import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "UI", value: 24 },
  { name: "Backend", value: 40 },
  { name: "Data", value: 19 },
  { name: "Design", value: 33 },
];

const AnalyticsPage = () => {
  return (
    <div className="dashboard-panel text-slate-900 dark:text-slate-100">

      <h2 className="dashboard-section-title mb-4">
        Analytics
      </h2>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            {/* Clean subtle grid (horizontal only) */}
            <CartesianGrid stroke="#e5e7eb" vertical={false} />

            {/* Axes */}
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                color: "#fff",
                borderRadius: "6px",
              }}
            />

            {/* Bars (single professional color) */}
            <Bar dataKey="value" fill="#3b82f6" />

          </BarChart>

        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default AnalyticsPage;