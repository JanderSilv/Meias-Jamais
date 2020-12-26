import api from '../api';
import { TypeUser, TypeLogin } from '../models/authentication';
import authUrls from '../urls/authentication';

const AuthApi = {
    Login: (data: TypeUser) => api.post<TypeLogin>(authUrls.login, data),
};

export default AuthApi;
