import axios from 'axios';

const URL = 'https://ihsanutd-backend.vercel.app/api/member';

export const getMembers = () => {
    return axios.get(URL);
    }

export const getMember = (id) => {
    return axios.get(`${URL}/${id}`);
    }

export const createMember = (Member) => {
    return axios.post(URL, Member);
    }

// export const updateMember = (id, Member) => {
//     // console.log(`${Member}`)
//     return axios.put(`${URL}/${id}`, Member);
//     }

export const updateMember = (id, formData) => {
    return axios.put(`${URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

export const deleteMember = (id) => {
    return axios.delete(`${URL}/${id}`);
    }