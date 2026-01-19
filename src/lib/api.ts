import axios from 'axios';
import { BASE_URL } from './constants';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchPokemonList = () => api.get('/pokemon');
export const fetchPokemonDetails = (id: number) => api.get(`/pokemon/${id}`);
export const fetchPokemonTypes = () => api.get('/type');
export const fetchPokemonAbilities = () => api.get('/ability');

export default api;
