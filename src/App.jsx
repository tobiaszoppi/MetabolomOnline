import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AdminPanel from './AdminPanel';
import React from "react";
import Login from "./Components/seguimiento/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/iniciarSesion" element={<Login />} />
                <Route path="/adminpanel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
