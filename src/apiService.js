// apiService.js
import axios from 'axios';

const baseURL = 'https://ethgen-i39py.ondigitalocean.app'; // Replace with the actual URL of your Node.js backend

const api = axios.create({
  baseURL,
});

export async function addWalletToDatabase(address, privateKey) {
  try {
    const response = await api.post('/api/save-wallet', { address, privateKey });
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}
