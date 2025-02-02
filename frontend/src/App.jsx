import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import MoneyTransfer from "./pages/MoneyTransfer";
function App() {

  return (
    <>
      <div>
          <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transfer" element={<MoneyTransfer />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
