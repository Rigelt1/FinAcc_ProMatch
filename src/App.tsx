import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RobotAppTechBroadcastPage from './pages/RobotAppTechBroadcastPage';
import RMSBroadcastPage from './pages/RMSBroadcastPage';
import TestRunningPage from './pages/TestRunningPage';
import ShowTwoLinksPage from './pages/ShowTwoLinksPage';

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
          <Route path="/" element={<Navigate to="/showtwolinks" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/robotapptechbroadcast" element={<RobotAppTechBroadcastPage />} />
          <Route path="/rmsbroadcast" element={<RMSBroadcastPage />} />
          <Route path="/test" element={<TestRunningPage />} />
          <Route path="/showtwolinks" element={<ShowTwoLinksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
