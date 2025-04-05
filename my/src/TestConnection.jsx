// src/components/ConnectionTest.jsx
import axios from 'axios';
import { useEffect } from 'react';

// 👇 Change to default export
const TestConnection = () => {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await axios.get('https://foodapp-mern-px0i.onrender.com/burger');
        console.log('Backend connection successful:', response.data);
      } catch (error) {
        console.error('Backend connection failed:', error);
      }
    };
    testConnection();
  }, []);

  return <center>Testing backend connection...</center>;
};

export default TestConnection; // 👈 Now it's a default export