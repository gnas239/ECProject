import axiosClient from "./axiosClient";

const userApi = {
    getAll: (params) => {
    const url = '/account/getAll';
    return axiosClient.get(url, { params });
    },
    update: (params) => {
        const url = '/account/update';
        return axiosClient.put(url, params)
    },
    findById: (id) => {
        const url = `/account/getByID/${id}`;
        return axiosClient.get(url)
    },
    add: (params) => {
        const url = '/account/add';
        return axiosClient.post(url, params)
    }
    }

export default userApi;