import { error } from 'console';
import api from './api';

interface UserParams {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    created_at: string;
}

interface PasswordParams {
    currentPassword: string;
    newPassword: string;
}

const profileService = {
    //This method will be used to catch the current user informations by fetching the backend
    fetchCurrent: async () => {
        const token = sessionStorage.getItem('platform-token');

        const res = await api
            .get('/users/current', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .catch((error) => {
                return error.response;
            });

        return res.data;
    },
    userUpdate: async (params: UserParams) => {
        const token = sessionStorage.getItem('platform-token');

        const res = await api
            .put('/users/current', params, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .catch((error) => {
                if (error.response.status === 400 || error.response.status === 401) {
                    return error.response;
                }

                return error;
            });

        return res.status;
    },
    passwordUpdate: async (params: PasswordParams) => {
        const token = sessionStorage.getItem('platform-token');

        const res = await api
            .put('/users/current/accountPassword', params, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .catch((error) => {
                if (error.response.status === 400 || error.response.status === 401) {
                    return error.response;
                }

                return error;
            });

        return res.status;
    },
};

export default profileService;
