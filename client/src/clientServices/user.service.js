import AuthHeader from "./AuthHeader";
import axios from 'axios';
import http from './http-common';

class UserService2 {
    getPublicContent() {
        return http.get('all');
    }

    getUserBoard() {
        return http.get('user', {headers: AuthHeader() });
    }

    getModeratorBoard() {
        return http.get('mod', {headers: AuthHeader()});
    }

    getAdminBoard() {
        return http.get('admin', {headers: AuthHeader()});
    }
}
export default new UserService2();