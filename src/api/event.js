import axios from 'axios';

const URL = 'https://ihsanutd-backend.vercel.app/api/event';

export const getEvents = () => {
    return axios.get(URL);
    }

export const getEvent = (id) => {
    return axios.get(`${URL}/${id}`);
    }

export const createEvent = (event) => {
    return axios.post(URL, event);
    }

export const updateEvent = (id, event) => {
    // console.log(`${event}`)
    return axios.put(`${URL}/${id}`, event);
    }

export const deleteEvent = (id) => {
    return axios.delete(`${URL}/${id}`);
    }
