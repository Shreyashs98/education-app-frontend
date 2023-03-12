import Menu from './Menu';
import Home from './pages/Home';
import MaterialsList from './pages/MaterialsList';
import AddMaterial from './pages/AddMaterial';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Menu />

            <div className="container my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/materials" element={<MaterialsList />} />
                    <Route path="/materials/add" element={<AddMaterial />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;