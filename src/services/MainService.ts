import apiClient from "../services/api"
import {
	initialUserState,
	Task,
	TaskStatus,
	UserInterface,
} from "../Contexts/GlobalContext"
import { ThemeContext } from "@emotion/react"

interface Response<T> {
	status: boolean
	message: string
	data: T
}

interface UserResponse {
	id: number
	team_id: number
	created_at: string
	email: string
	email_verified_at: string
	first_name: string
	last_name: string
	role: string
	updated_at: string
}

class MainService {
	authenticate = async (email: string, password: string) => {
		await apiClient.get("/sanctum/csrf-cookie")

		return await apiClient
			.post<Response<string>>("api/auth/authenticate", {
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

	getUser = async () => {
		return await apiClient
			.get<Response<UserInterface>>(`api/user`)
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

	getTasks = async () => {
		return await apiClient
			.get<Response<Task[]>>("api/tasks/me")
			.then((response) => {
				return response.data
			})
			.catch((error) => {
				console.error("error in MainService.getTasks", error)
				return {
					status: false,
					message: error,
					data: [],
				} as Response<Task[]>
			})
	}

	updateTask = async (
		id: number,
		name: string,
		status: TaskStatus,
		content: string
	) => {
		return await apiClient
			.post<Response<Task>>(`api/tasks/me/${id}`, {
				name: name,
				status: status,
				content: content,
			})
			.then((response) => {
				return response.data
			})
			.catch((error) => {
				console.error("error in MainService.updateTask", error)
				return {
					status: false,
					message: error,
					data: {},
				} as Response<Task>
			})
	}

	registerUser = async (
		email: string,
		password: string,
		firstName: string,
		lastName: string
	) => {
		return await apiClient
			.post<Response<string>>(`auth/register`, {
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

	deleteTask = async (id: number) => {
		return await apiClient
			.get<Response<[]>>(`api/tasks/me/delete/${id}`)
			.then((response) => {
				return response.data
			})
			.catch((error) => {
				console.error("error in MainService.deleteTask", error)
				return {
					status: false,
					message: error,
					data: [],
				}
			})
	}

	createTask = async (name: string, content: string) => {
		return await apiClient
			.post<Response<Task>>("api/tasks/me/new", {
				name: name,
				content: content,
			})
			.then((response) => {
				return response.data
			})
			.catch((error) => {
				console.error("error in mainService.createTask")
			})
	}
}

const MainServiceProvider = new MainService()

export default MainServiceProvider
