import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import MoneyTransfer from "./pages/MoneyTransfer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
function App() {

  return (
    <>
      <div>
          <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transfer" element={<MoneyTransfer />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
