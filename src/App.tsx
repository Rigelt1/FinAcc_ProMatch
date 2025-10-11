import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RobotAppTechBroadcastPage from './pages/RobotAppTechBroadcastPage';
import RMSBroadcastPage from './pages/RMSBroadcastPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/robotapptechbroadcast" element={<RobotAppTechBroadcastPage />} />
        <Route path="/rmsbroadcast" element={<RMSBroadcastPage />} />
      </Routes>
    </Router>
  );
}

export default App;
