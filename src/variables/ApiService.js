import api from '../services/api';

let userId;
export const setUserId = (user_id) => {
    return (userId = user_id);
};

const ApiService = {
    //#region AuthRoutes
    RegisterUser: (user) => {
        return api
            .post('/user/create', user)
            .then((response) => {
                console.log('AS_RegisterUser: ', response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log('AS_RegisterUser: ', error.response);
                return Promise.reject(error.response);
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

    //#region PostsRoutes

    MyFeed: () => api.post('/user/feed'),

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
    //#endregion

    UploadImage: (image = {}) => {
        console.log(image);
        const formData = new FormData();
        formData.append('file', image);
        console.log(formData);

        return api
            .post('/upload/image', formData, {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                },
            })
            .then((response) => {
                console.log('AS_ImageUpload: ', response);
                return Promise.resolve(response);
            })
            .catch((error) => {
                console.log('AS_ImageUpload: ', error.response);
                return Promise.reject(error);
            });
    },
};

export default ApiService;
