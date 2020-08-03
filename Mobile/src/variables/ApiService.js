import api from '../services/api';

const ApiService = {
    Login: (data = {}) => {
        // console.log(Promise.resolve(data));
        return api
            .post('/user/login', data)
            .then((response) => {
                // console.log('AS_Login_success:', response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log('AS_Login_error:', error);
                return Promise.reject(error);
            });
    },

    GetUserData: () => {
        return api
            .get('/user/getCurrentUser')
            .then((response) => {
                console.log(response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    },

    Register: (data = {}) => {
        return api
            .post('/user/create', data)
            .then((response) => {
                console.log(response);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    },
};

export default ApiService;
