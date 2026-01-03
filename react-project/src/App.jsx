import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Olá, Mundo!");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Mensagem alterada!");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
