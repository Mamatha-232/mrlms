import { useState } from 'react';
import { users as mockUsers } from '../../data/mockData';

const ManageUsersPage = () => {
  const [users, setUsers] = useState(mockUsers);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'student' });

  const handleEdit = (user) => {
    alert(`Edit user: ${user.name}`);
  };

  const handleDelete = (user) => {
    alert(`Delete user: ${user.name}? (mock)`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: `u${users.length + 1}`,
      ...formData,
    };
    setUsers((prev) => [...prev, newUser]);
    setFormData({ name: '', email: '', role: 'student' });
    setShowForm(false);
  };

  return (
    <div className="dashboard-panel">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="dashboard-section-title mb-0">Manage Users</h2>
        <button onClick={() => setShowForm(!showForm)} className="dashboard-button-primary text-sm">
          {showForm ? 'Cancel' : 'Add User'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAddUser} className="dashboard-subcard mb-6 space-y-3 p-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="dashboard-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="dashboard-input"
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="dashboard-input"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="dashboard-button-primary w-full">
            Add User
          </button>
        </form>
      )}

      <div className="mt-4 space-y-3">
        {users.map((user) => (
          <div key={user.id} className="dashboard-subcard flex justify-between gap-4 p-4">
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{user.name}</p>
              <p className="mt-1 text-xs dashboard-muted">
                {user.email} • {user.role}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => handleEdit(user)} className="dashboard-button-secondary text-xs">
                Edit
              </button>
              <button onClick={() => handleDelete(user)} className="dashboard-button-secondary text-xs">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsersPage;
