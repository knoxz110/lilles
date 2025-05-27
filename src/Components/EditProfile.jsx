import React, { useState } from 'react';
import Users, { updateUser } from './UtilityUsers';
import { ToastContainer, toast } from 'react-toastify'

const EditProfile = () => {
  const loggedInEmail = sessionStorage.getItem('loggedInUserEmail');
  const loggedInUser = Users.find(user => user.email === loggedInEmail);

  // Initialize form data from loggedInUser or empty strings if not found
  const [formData, setFormData] = useState({
    name: loggedInUser?.name || '',
    email: loggedInUser?.email || '',
    oldPassword: '', 
    password: '',
    address: loggedInUser?.Address || '',
    Phone: loggedInUser?.Phone || '',
    
  });


  const [oldPassword, setOldPassword] = useState('');

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage(null);
    setError(null);

    if (!formData.name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (oldPassword !== loggedInUser?.password) {
      toast.error('Old password is incorrect.');
      return;
    }

    // Prepare data to update — only include password if changed
    const dataToUpdate = {
      ...loggedInUser,
      name: formData.name,
      email: formData.email,
      Address: formData.address,
      phone: formData.Phone || '',

    };

    if (formData.password) {
      dataToUpdate.password = formData.password;
    }

    try {
      // Call updateUser (assumed async)
      await updateUser(dataToUpdate);
      toast.success('Profile updated successfully!');
      setFormData(prev => ({ ...prev, password: '' })); // Clear password input
    } catch (err) {
      toast.error('Failed to update profile. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="bg-white pb-7">
      <ToastContainer />
      <div className="max-w-md mx-auto p-6 bg-white mt-[16%] md:mt-[10%] rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

        {message && <p className="mb-4 text-green-600">{message}</p>}
        {error && <p className="mb-4 text-red-600">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
         <div>
            <label className="block font-medium">Old Password</label>
            <input
              type="password"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter old password"
            />
          </div>


          <div>
            <label className="block font-medium">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Change password"
              autoComplete="new-password"
            />
          </div>
          <div>
            <label className="block font-medium">New Phone Number</label>
            <input
              type="text"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Change Phone Number"
            />
          </div>

          <div>
            <label className="block font-medium">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter billing address"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
