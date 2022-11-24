import "./styles.css";
import { io } from "socket.io-client";

export default function App() {
  const socket = io("https://4umuxp-3000.preview.csb.app/");

  socket.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("event-b", () => {
      console.log("teste");
    });
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
