import { useState } from "react";
import "./Collapse.css";

export default function Collapse() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState(["Hello world!!!"]);
  const [visible, setVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function sendMessage() {
    if (message) {
      setChats(chats.concat(message));
    }
    setMessage("");
  }

  return (
    <div className="collapse">
      <div className="collapse-heading" onClick={() => setVisible(!visible)}>
        <h1>Chat</h1>
      </div>
      {visible && (
        <div className="collapse-body">
          <div className="collapse-chats">
            {chats.map((message, i) => (
              <div className="div-message" key={i}>
                <div className="div-icon">i</div>
                <p className="div-message-text">{message}</p>
              </div>
            ))}
          </div>
          <div className="collapse-send">
            <form onSubmit={(e) => handleSubmit(e)}>
              {/* <label>New message:</label> */}
              <textarea
                id="message"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="sendBtn" onClick={sendMessage}>
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
