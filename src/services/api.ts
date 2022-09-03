import axios from "axios";

/**
 * @description
 * Method for creating an axios instance
 * from base url, with default headers and credentials
 */
const apiClient = axios.create({
	baseURL: "http://172.16.19.108:8000/",
	withCredentials: true,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: "Bearer " + localStorage.getItem("token"),
	},
});
export default apiClient;
