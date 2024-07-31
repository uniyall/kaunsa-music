import { Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
