import axios from 'axios';

const URL = 'http://localhost:3001/api/event';

export const getEvents = () => {
    return axios.get(URL);
    }

export const getEvent = (id) => {
    return axios.get(`${URL}/${id}`);
    }

export const createEvent = (event) => {
    return axios.post(URL, event);
    }

export const updateEvent = (event) => {
    return axios.put(`${URL}/${event._id}`, event);
    }

export const deleteEvent = (id) => {
    return axios.delete(`${URL}/${id}`);
    }
