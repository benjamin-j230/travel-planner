import { useState } from "react";
import { getTripPlan } from "../../api/aiApi";

export default function TripPlanner() {
  const [form, setForm] = useState({ destination: "", days: "", budget: "", interests: "" });
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await getTripPlan(form);
      setPlan(res.data.data);
    } catch {
      setPlan("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="ai-card">
      <h2>🧳 AI Trip Planner</h2>
      <form onSubmit={handleSubmit}>
        <input name="destination" placeholder="Destination" onChange={handleChange} required />
        <input name="days" type="number" placeholder="Number of days" onChange={handleChange} required />
        <input name="budget" placeholder="Budget (e.g. ₹20000)" onChange={handleChange} required />
        <input name="interests" placeholder="Interests (food, beaches...)" onChange={handleChange} required />
        <button type="submit" disabled={loading}>
          {loading ? "Planning..." : "Generate Plan"}
        </button>
      </form>
      {plan && <pre className="ai-output">{plan}</pre>}
    </div>
  );
}