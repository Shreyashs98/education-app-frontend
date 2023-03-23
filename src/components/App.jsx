import Menu from "./Menu";
import Home from "./pages/Home";
import MaterialsList from "./pages/MaterialsList";
import AddMaterial from "./pages/AddMaterial";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
const App = () => {
  return (
    <div>
      <Menu />

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/materials" element={<MaterialsList />} />
          <Route path="/materials/add" element={<AddMaterial />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
