
import api from '../api';
import { useState } from 'react';

const HandleAllProducts = () => {
  const [formData, setFormData] = useState({
    file: null,
  });

  const handleFileChange = (e) => {
    const fileValue = e.target.files[0];
    setFormData({ file: fileValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('file', formData.file);

    try {
      const response = await api.post('/user/upload', formDataToSend);

      // Assuming the response contains the URL of the uploaded image on GoDaddy
      const imageUrl = response.data.imageUrl;

      // You can now use imageUrl as needed, e.g., save it to your database
      console.log('Image uploaded successfully!', imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label>
        Image:
        <input type="file" name="file" onChange={handleFileChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HandleAllProducts;
