import { useUsers } from '../hooks/useApi';

const Users = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div className="container py-8"><p>Loading users...</p></div>;
  if (error) return <div className="container py-8"><p className="text-red-600">Error: {error}</p></div>;

  return (
    <div className="container py-8">
      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Users Management</h1>

        {users.length === 0 ? (
          <p className="text-gray-600">No users found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">ID</th>
                  <th className="border p-3 text-left">Name</th>
                  <th className="border p-3 text-left">Email</th>
                  <th className="border p-3 text-left">Created</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="border p-3">{user.id}</td>
                    <td className="border p-3">{user.name}</td>
                    <td className="border p-3">{user.email}</td>
                    <td className="border p-3">{new Date(user.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
