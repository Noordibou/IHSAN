import axios from 'axios';

const URL = 'https://ihsanutd-backend.vercel.app/api/event'

export const getEvents = () => {
    return axios.get(URL);
    }

export const getEvent = (id) => {
    return axios.get(`${URL}/${id}`);
    }

export const createEvent = (event) => {
    return axios.post(URL, event);
    }

export const updateEvent = (id, formData) => {
    return axios.put(`${URL}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    };

export const deleteEvent = (id) => {
    return axios.delete(`${URL}/${id}`);
    }
