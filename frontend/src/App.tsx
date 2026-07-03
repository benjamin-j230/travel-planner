import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    try {
      setLoading(true);
      setReply("");

      const res = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history: [],
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setReply(data.message || "Something went wrong");
        return;
      }

      setReply(data.data.reply);
      setMessage("");
    } catch (err) {
      setReply("Failed to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="chat-box">
        <h1>Smart Travel Planner</h1>
        <p>Plan trips, find places, manage budgets, and explore routes.</p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Example: Plan a 3 day trip to Goa"
          rows={5}
        />

        <button onClick={sendMessage} disabled={loading || !message.trim()}>
          {loading ? "Thinking..." : "Send"}
        </button>

        {reply && (
          <div className="reply">
            <h3>AI Reply</h3>
            <p>{reply}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;