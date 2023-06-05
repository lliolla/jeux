import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memory from "./pages/Memory";
import Math from "./pages/Math";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/math" element={<Math />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
