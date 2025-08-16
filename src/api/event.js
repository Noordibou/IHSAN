import axios from 'axios';

const URL = 'https://ihsanutd-backend.vercel.app/api/event';

export const getEvents = () => {
    return axios.get(URL);
};

export const getEvent = (id) => {
    return axios.get(`${URL}/${id}`);
};

export const createEvent = (eventData) => {
    // Create FormData for multipart upload
    const formData = new FormData();
    
    // Add text fields
    formData.append('name', eventData.name);
    formData.append('category', eventData.category);
    
    // Handle date properly - convert Date object to string if needed
    let dateValue = eventData.date;
    if (dateValue instanceof Date) {
        dateValue = dateValue.toISOString().split('T')[0];
    }
    formData.append('date', dateValue);
    
    formData.append('location', eventData.location);
    formData.append('description', eventData.description);
    
    // Add image file if present
    if (eventData.image && eventData.image instanceof File) {
        formData.append('image', eventData.image);
    }
    
    return axios.post(URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const updateEvent = (id, eventData) => {
    // Create FormData for multipart upload
    const formData = new FormData();
    
    // Add text fields
    formData.append('name', eventData.name);
    formData.append('category', eventData.category);
    
    // Handle date properly - convert Date object to string if needed
    let dateValue = eventData.date;
    if (dateValue instanceof Date) {
        dateValue = dateValue.toISOString().split('T')[0];
    }
    formData.append('date', dateValue);
    
    formData.append('location', eventData.location);
    formData.append('description', eventData.description);
    
    // Add image file if present
    if (eventData.image && eventData.image instanceof File) {
        formData.append('image', eventData.image);
    }
    
    return axios.put(`${URL}/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const deleteEvent = (id) => {
    return axios.delete(`${URL}/${id}`);
};
