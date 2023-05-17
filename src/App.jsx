import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import UserPanel from './UserPanel';
import AdminPanel from './AdminPanel';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/userpanel" element={<UserPanel />} />
                <Route path="/adminpanel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}

export default App;
