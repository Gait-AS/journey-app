import apiClient from "../services/api"
import axios from "axios"
import { initialUserState, UserInterface } from "../Contexts/GlobalContext"

const DEV_URL = "http://172.16.19.108:80/api"

interface Response<T> {
	status: boolean
	message: string
	data: T
}

class MainService {
	authenticate = async (email: string, password: string) => {
		await apiClient.get("/sanctum/csrf-cookie")

		return await apiClient
			.post<Response<string>>("/api/auth/authenticate", {
				email: email,
				password: password,
			})
			.then((response) => {
				localStorage.setItem("token", response.data.data)
				return response.data
			})
			.catch((error) => {
				console.error("error in test post:", error)
				return {
					status: false,
					message: error.message,
					data: "",
				} as Response<string>
			})
	}

	getUser = async (token: string) => {
		return axios
			.get<Response<UserInterface>>(`${DEV_URL}/user`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((response) => {
				return response.data
			})
			.catch((error) => {
				console.error("error in MainService.getUser", error)
				return {
					status: false,
					message: error,
					data: initialUserState,
				} as Response<UserInterface>
			})
	}

	registerUser = async (
		email: string,
		password: string,
		firstName: string,
		lastName: string
	) => {
		return axios
			.post<Response<string>>(`${DEV_URL}/auth/register`, {
				email: email,
				password: password,
				first_name: firstName,
				last_name: lastName,
			})
			.then((response) => {
				return response.data
			})
			.catch((error) => {
				console.error("error in MainService.registerUser", error)
				return {
					status: false,
					message: error,
					data: "",
				}
			})
	}
}

const MainServiceProvider = new MainService()

export default MainServiceProvider
