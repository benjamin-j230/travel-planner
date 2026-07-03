import { useState } from "react";
import { sendChatMessage } from "../../api/aiApi";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await sendChatMessage(input);
      setMessages((m) => [...m, { role: "bot", text: res.data.data }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Error, try again." }]);
    }
    setLoading(false);
  };

  return (
    <div className="ai-card chat-box">
      <h2>💬 TripBot Assistant</h2>
      <div className="chat-window">
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>{m.text}</div>
        ))}
        {loading && <div className="msg bot">Typing...</div>}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask about your trip..."
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}