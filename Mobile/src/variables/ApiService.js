import api from '../services/api';

let userId;
export const setUserId = (user_id) => {
    return (userId = user_id);
};

const ApiService = {
    //#region AuthRoutes
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
    //#endregion

    //#region UserData
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

    GetFollowers: () => {
        return api
            .get(`/user/getFollower/${userId}`)
            .then((response) => {
                // console.log(response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    },

    GetFollowing: () => {
        return api
            .get(`/user/getFollowing/${userId}`)
            .then((response) => {
                // console.log(response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    },
    //#endregion

    MyPosts: () => {
        return api
            .get(`/post/index/${userId}`)
            .then((response) => {
                // console.log('AS_MyPosts: ', response.data);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error);
            });
    },

    ShowPost: (product_id) => {
        // console.log('AS_showPost_ProductId: ', product_id);
        return api
            .get(`/post/${product_id}`)
            .then((response) => {
                console.log('AS_ShowPost: ', response.data);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log('AS_ShowPost: ', error);
                return Promise.reject(error);
            });
    },

    CreatePost: (product = {}) => {
        return api
            .post(`/post/create`, product)
            .then((response) => {
                console.log(response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log('AS_CreatePost: ', error);
                return Promise.reject(error);
            });
    },

    EditPost: (product_id = 0, product = {}) => {
        return api
            .put(`/post/update/${product_id}`, product)
            .then((response) => {
                console.log('AS_UpdatePost: ', response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log('AS_UpdatePost: ', error);
                return Promise.reject(error);
            });
    },

    RemovePost: (product_id = 0) => {
        return api
            .delete(`/post/remove/${product_id}`)
            .then((response) => {
                console.log('AS_DeletePost: ', response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log('AS_DeletePost: ', error);
                return Promise.reject(error);
            });
    },

    UploadImage: (image = {}) => {
        return api
            .post('/upload/image', image)
            .then((response) => {
                console.log('AS_ImageUpload: ', response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log('AS_ImageUpload: ', error);
                return Promise.reject(error);
            });
    },
};

export default ApiService;
