import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RobotAppTechBroadcastPage from './pages/RobotAppTechBroadcastPage';
import RMSBroadcastPage from './pages/RMSBroadcastPage';

function App() {
  return (
    <Router>
      <div style={{
        backgroundImage: "url('/background1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/robotapptechbroadcast" element={<RobotAppTechBroadcastPage />} />
          <Route path="/rmsbroadcast" element={<RMSBroadcastPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
