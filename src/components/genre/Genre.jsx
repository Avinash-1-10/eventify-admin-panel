import React, { useState } from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Table from './Table';

const MySwal = withReactContent(Swal);

Modal.setAppElement('#root');

const dummyData = [
  { id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },
  { id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },{ id: 1, genre: 'Action' },
  { id: 2, genre: 'Comedy' },
  { id: 3, genre: 'Drama' },
];

const Genre = () => {
  const [data, setData] = useState(dummyData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (item) => {
    setCurrentData(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this genre?',
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
        setData(data.filter((item) => item.id !== id));
        toast.dark('Deleted successfully', {
          position: 'bottom-right',
          theme: 'dark',
        });
      }
    });
  };

  const handleSave = () => {
    if (currentData?.id) {
      // Update existing genre
      setData(data.map((item) => (item.id === currentData.id ? currentData : item)));
      toast.dark('Genre updated successfully', {
        position: 'bottom-right',
        theme: 'dark',
      });
    } else {
      // Add new genre
      const newId = data.length ? data[data.length - 1].id + 1 : 1;
      setData([...data, { id: newId, genre: currentData.genre }]);
      toast.dark('New genre added successfully', {
        position: 'bottom-right',
        theme: 'dark',
      });
    }
    setIsModalOpen(false);
  };

  const handleAdd = () => {
    setCurrentData({ genre: '' }); // Set an empty genre object for the new entry
    setIsModalOpen(true); // Open the modal for adding a new genre
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredData = data.filter((item) =>
    item.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#161824] text-white min-h-screen">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 bg-[#222738] text-white border border-gray-600 rounded"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New
        </button>
      </div>

      <Table data={filteredData} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Modal for editing or adding */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Edit Genre"
        className="bg-[#222738] text-white p-6 rounded shadow-md max-w-md mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      >
        <h2 className="text-xl mb-4">{currentData?.id ? 'Edit Genre' : 'Add Genre'}</h2>
        <input
          type="text"
          value={currentData?.genre || ''}
          onChange={(e) => setCurrentData({ ...currentData, genre: e.target.value })}
          className="p-2 bg-[#161824] text-white border border-gray-600 rounded w-full"
          placeholder="Genre Name"
        />
        <div className="mt-4 flex justify-end">
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
            Save
          </button>
          <button onClick={() => setIsModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </Modal>

      <ToastContainer theme="dark" />
    </div>
  );
};

export default Genre;
