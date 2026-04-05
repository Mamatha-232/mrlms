import { useState } from 'react';
import { useAuth } from '../routes/AuthContext';

const ProfilePage = () => {
  const auth = useAuth();
  const [name, setName] = useState(auth.user.name);
  const [email, setEmail] = useState(auth.user.email);

  const handleSave = (e) => {
    e.preventDefault();
    auth.updateProfile({ name, email });
    alert('Profile updated!');
  };

  return (
    <div className="dashboard-panel mx-auto max-w-xl">
      <h2 className="dashboard-section-title">Profile</h2>
      <p className="dashboard-muted mt-1">Edit your user information.</p>
      <form onSubmit={handleSave} className="mt-6 space-y-4">
        <input value={name} onChange={(e) => setName(e.target.value)} className="dashboard-input" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="dashboard-input" />
        <button className="dashboard-button-primary">Save</button>
      </form>
    </div>
  );
};

export default ProfilePage;
