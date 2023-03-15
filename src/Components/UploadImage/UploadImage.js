import axios from 'axios';

export const uploadImageHandler = async (formData) => {
  console.log(formData);
  try {
    // const res = await fetch('https://api.cloudinary.com/v1_1/cloudhosting/image/upload', {
    // 	method: 'POST',
    // 	body: formData
    // });

    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/cloudhosting/image/upload',
      formData
    );
    if (res.status === 200) {
      const data = res.data.secure_url;
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error.stack);
  }
};
