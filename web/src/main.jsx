import ReactDOM from "react-dom/client";
import "./css/Global.css";
import RouteProvider from "./providers/RouteProvider";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<RouteProvider />);
