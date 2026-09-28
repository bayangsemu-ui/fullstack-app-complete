import { useState } from 'react';
import { useData } from '../hooks/useApi';
import api from '../services/api';

const Data = () => {
  const { data, loading, error, refetch } = useData();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await api.post('/data', { title, description });
      setTitle('');
      setDescription('');
      refetch();
    } catch (err) {
      console.error('Failed to create data:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await api.delete(`/data/${id}`);
        refetch();
      } catch (err) {
        console.error('Failed to delete data:', err);
      }
    }
  };

  if (loading) return <div className="container py-8"><p>Loading data...</p></div>;

  return (
    <div className="container py-8">
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Create New Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field h-24"
            />
          </div>
          <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-50">
            {submitting ? 'Creating...' : 'Create'}
          </button>
        </form>
      </div>

      <div className="card">
        <h1 className="text-3xl font-bold mb-6">Data Management</h1>

        {error && <p className="text-red-600 mb-4">Error: {error}</p>}

        {data.length === 0 ? (
          <p className="text-gray-600">No data found</p>
        ) : (
          <div className="space-y-4">
            {data.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg hover:shadow-md transition">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Created: {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn-secondary ml-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Data;
