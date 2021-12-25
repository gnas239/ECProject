import axiosClient from "./axiosClient";

const savingApi = {
    getAll: (params) => {
    const url = '/savings/getAll';
    return axiosClient.get(url, { params });
    },
    add: (params) =>{
        const url = '/savings/add';
        return axiosClient.post(url, params)
    },
    delete: (id) =>{
        const url = `/savings/delete/${id}`;
        return axiosClient.delete(url)
    },
    update: (params) =>{
        const url = '/savings/update';
        return axiosClient.put(url, params)
    }
}

export default savingApi;