import axios from 'axios';

const portfolioApi = axios.create({
  baseURL: import.meta.env.VITE_PORTFOLIO_API_URL || 'https://reqres.in/api',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export async function syncPortfolio(content, signal) {
  const apiKey = import.meta.env.VITE_REQRES_API_KEY;
  const response = await portfolioApi.post('/workintech', content, {
    signal,
    headers: apiKey ? { 'x-api-key': apiKey } : undefined,
  });
  return response.data;
}
