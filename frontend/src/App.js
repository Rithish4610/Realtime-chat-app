import { io } from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message);
      setChat([...chat, { msg: message, self: true }]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      setChat((prev) => [...prev, { msg, self: false }]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h2>🗨️ Real-Time Chat App</h2>

      <div style={{ 
        border: "1px solid #ccc", 
        padding: 20, 
        height: 300, 
        overflowY: "auto",
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: "#f9f9f9"
      }}>
        {chat.length === 0 && (
          <p style={{ color: "#999" }}>No messages yet. Start chatting!</p>
        )}
        {chat.map((c, i) => (
          <p 
            key={i} 
            style={{ 
              color: c.self ? "green" : "blue",
              textAlign: c.self ? "right" : "left",
              padding: "8px 12px",
              backgroundColor: c.self ? "#e8f5e9" : "#e3f2fd",
              borderRadius: 8,
              margin: "5px 0",
              maxWidth: "70%",
              marginLeft: c.self ? "auto" : 0,
              marginRight: c.self ? 0 : "auto"
            }}
          >
            {c.self ? "You: " : "Friend: "}{c.msg}
          </p>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          style={{ 
            flex: 1, 
            padding: 12, 
            fontSize: 16,
            borderRadius: 8,
            border: "1px solid #ccc"
          }}
        />
        <button 
          onClick={sendMessage}
          style={{ 
            padding: "12px 24px", 
            fontSize: 16,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
