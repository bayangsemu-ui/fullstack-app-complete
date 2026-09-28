import { useAuthStore } from '../store/authStore';

const Dashboard = () => {
  const { user } = useAuthStore();

  return (
    <div className="container py-8">
      <div className="card">
        <h1 className="text-4xl font-bold mb-4">Welcome, {user?.name}! 👋</h1>
        <p className="text-gray-600 mb-6">
          This is your dashboard. Use the navigation menu to explore the application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📊 Dashboard</h3>
            <p className="text-gray-600">View your dashboard and statistics</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">👥 Users</h3>
            <p className="text-gray-600">Manage user accounts and profiles</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📝 Data</h3>
            <p className="text-gray-600">Create and manage your data</p>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Explore the Users section to see all registered users</li>
            <li>Create new data entries in the Data section</li>
            <li>Update your profile information</li>
            <li>Secure logout when you're done</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
