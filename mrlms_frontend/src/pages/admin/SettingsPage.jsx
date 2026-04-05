import { useState } from 'react';
import { useAuth } from '../../routes/AuthContext';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [notification, setNotification] = useState(true);
  const [autoEnroll, setAutoEnroll] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSave = () => {
    alert('Settings saved!');
  };

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <div className="dashboard-panel mx-auto max-w-xl">
      <h2 className="dashboard-section-title">Settings</h2>
      <div className="mt-5 space-y-4">
        <label className="dashboard-subcard flex items-center justify-between p-4">
          <span className="font-medium text-slate-900 dark:text-slate-100">Notifications</span>
          <input
            type="checkbox"
            checked={notification}
            onChange={(e) => setNotification(e.target.checked)}
          />
        </label>
        <label className="dashboard-subcard flex items-center justify-between p-4">
          <span className="font-medium text-slate-900 dark:text-slate-100">Auto-enroll students</span>
          <input
            type="checkbox"
            checked={autoEnroll}
            onChange={(e) => setAutoEnroll(e.target.checked)}
          />
        </label>
      </div>
      <div className="mt-6 space-y-3">
        <button onClick={handleSave} className="dashboard-button-primary w-full">
          Save Settings
        </button>
        <button onClick={handleLogout} className="dashboard-button-secondary w-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
