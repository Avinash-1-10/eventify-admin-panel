import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MySwal = withReactContent(Swal);

Modal.setAppElement('#root');

const dummyUserData = [
  { id: 1, profilePic: 'https://via.placeholder.com/50', name: 'John Doe', username: 'john123', email: 'john@example.com', role: 'Admin' },
  { id: 2, profilePic: 'https://via.placeholder.com/50', name: 'Jane Smith', username: 'jane456', email: 'jane@example.com', role: 'User' },
  { id: 3, profilePic: 'https://via.placeholder.com/50', name: 'Mike Johnson', username: 'mike789', email: 'mike@example.com', role: 'Moderator' }
];

const UserManagement = () => {
  const [users, setUsers] = useState(dummyUserData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      background: '#222738',
      color: '#fff',
      iconColor: '#f87171',
      confirmButtonColor: '#f87171',
      cancelButtonColor: '#6b7280',
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter((user) => user.id !== id));
        toast.dark('User deleted successfully', {
          position: 'bottom-right',
          theme: 'dark',
        });
      }
    });
  };

  const handleSave = () => {
    if (currentUser?.id) {
      setUsers(users.map((user) => (user.id === currentUser.id ? currentUser : user)));
      toast.dark('User updated successfully', {
        position: 'bottom-right',
        theme: 'dark',
      });
    } else {
      const newId = users.length ? users[users.length - 1].id + 1 : 1;
      setUsers([...users, { ...currentUser, id: newId }]);
      toast.dark('New user added successfully', {
        position: 'bottom-right',
        theme: 'dark',
      });
    }
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    setCurrentUser({ profilePic: '', name: '', username: '', email: '', role: 'User' });
    setIsModalOpen(true);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#161824] text-white min-h-screen p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search users..."
          className="p-2 bg-[#222738] text-white border border-gray-600 rounded"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-[#2e2f39]">
          <thead>
            <tr className="bg-[#161824] text-gray-300">
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-700">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-700">Profile</th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-700">Username</th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-gray-700">Role</th>
              <th className="px-6 py-3 text-center text-sm font-semibold border-b border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user.id}
                className={`hover:bg-[#1b1e2d] transition-colors duration-200 ${
                  index % 2 === 0 ? 'bg-[#222738]' : 'bg-[#1f2230]'
                }`}
              >
                <td className="px-6 py-4 border-b border-gray-700 text-sm">{index + 1}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-sm">
                  <img
                    src={user.profilePic}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-700 text-sm">{user.name}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-sm">{user.username}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-sm">{user.email}</td>
                <td className="px-6 py-4 border-b border-gray-700 text-sm">
                  {user.role}
                </td>
                <td className="px-6 py-4 border-b border-gray-700 text-sm text-center">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-400 hover:text-blue-500 transition duration-150 ease-in-out mr-3"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-400 hover:text-red-500 transition duration-150 ease-in-out"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Edit User"
        className="bg-[#222738] text-white p-6 rounded shadow-md max-w-md mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      >
        <h2 className="text-xl mb-4">{currentUser?.id ? 'Edit User' : 'Add User'}</h2>
        <input
          type="text"
          value={currentUser?.name || ''}
          onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
          className="p-2 bg-[#161824] text-white border border-gray-600 rounded w-full mb-4"
          placeholder="Full Name"
        />
        <input
          type="text"
          value={currentUser?.username || ''}
          onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })}
          className="p-2 bg-[#161824] text-white border border-gray-600 rounded w-full mb-4"
          placeholder="Username"
        />
        <input
          type="email"
          value={currentUser?.email || ''}
          onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
          className="p-2 bg-[#161824] text-white border border-gray-600 rounded w-full mb-4"
          placeholder="Email"
        />
        <select
          value={currentUser?.role || 'User'}
          onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
          className="p-2 bg-[#161824] text-white border border-gray-600 rounded w-full mb-4"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Moderator">Moderator</option>
        </select>
        <div className="flex justify-end">
          <button
            onClick={() => setIsModalOpen(false)}
            className="mr-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default UserManagement;
