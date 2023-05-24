import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memory from "./pages/Memory";
import Cisor from "./pages/Cisor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/cisor" element={<Cisor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
