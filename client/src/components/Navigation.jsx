import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Navigation = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold">FullStack App</div>
        <div className="flex gap-6">
          <button onClick={() => navigate('/')} className="hover:text-blue-400">
            Dashboard
          </button>
          <button onClick={() => navigate('/users')} className="hover:text-blue-400">
            Users
          </button>
          <button onClick={() => navigate('/data')} className="hover:text-blue-400">
            Data
          </button>
          <div className="flex gap-4 items-center">
            <span>{user?.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
