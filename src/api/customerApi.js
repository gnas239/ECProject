import axiosClient from "./axiosClient";

const customerApi = {
  getAll: (params) => {
    const url = "/customer/getAll";
    return axiosClient.get(url, { params });
  },
  update: (params) => {
    const url = "/customer/update";
    return axiosClient.put(url, params)
  },
  add: (params) => {
    const url = "/customer/add";
    return axiosClient.post(url, params)
  }
};

export default customerApi;
