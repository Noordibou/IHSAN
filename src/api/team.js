import axios from 'axios';

const URL = 'https://ihsanutd-backend.vercel.app/api/member';

export const getMembers = () => {
    return axios.get(URL);
};

export const getMember = (id) => {
    return axios.get(`${URL}/${id}`);
};

export const createMember = (memberData) => {
    // Create FormData for multipart upload
    const formData = new FormData();
    
    // Add text fields
    formData.append('name', memberData.name || '');
    formData.append('role', memberData.role || '');
    formData.append('major', memberData.major || '');
    formData.append('track', memberData.track || '');
    formData.append('graduation', memberData.graduation || '');
    formData.append('description', memberData.description || '');
    formData.append('number', memberData.number || '');
    
    // Add image file if present
    if (memberData.image && memberData.image instanceof File) {
        formData.append('image', memberData.image);
    }
    
    return axios.post(URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const updateMember = (id, memberData) => {
    // Create FormData for multipart upload
    const formData = new FormData();
    
    // Add text fields
    formData.append('name', memberData.name || '');
    formData.append('role', memberData.role || '');
    formData.append('major', memberData.major || '');
    formData.append('track', memberData.track || '');
    formData.append('graduation', memberData.graduation || '');
    formData.append('description', memberData.description || '');
    formData.append('number', memberData.number || '');
    
    // Add image file if present
    if (memberData.image && memberData.image instanceof File) {
        formData.append('image', memberData.image);
    }
    
    return axios.put(`${URL}/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const deleteMember = (id) => {
    return axios.delete(`${URL}/${id}`);
};