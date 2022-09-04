import React from "react"
import MainService from "../services/MainService"
import { reducer, Action } from "./GlobalReducer"
import { placeHolderTasks } from "./placeholderData"

export interface GlobalState {
	token: string
	user: UserInterface
	taskId: number
	tasks: Task[]
}

export interface UserInterface {
	id: number
	firstName: string
	lastName: string
	email: string
	currentProjectId: number
	teamId: number
	role: string
}

export interface Task {
	id: number
	name: string
	content: string
	status: TaskStatus
}

export type TaskStatus = "todo" | "doing" | "review" | "done"

export const initialUserState: UserInterface = {
	id: 0,
	firstName: "",
	lastName: "",
	email: "",
	currentProjectId: 0,
	teamId: 0,
	role: "",
}

const initialState: GlobalState = {
	token: "",
	user: initialUserState,
	taskId: 0,
	tasks: [],
}

export interface Commands {
	// getToken: () => Promise<string>
	setToken: (token: string) => void
	setUser: (user: UserInterface) => void
	getUser: () => void
	setTaskId: (id: number) => void
	setTasks: (tasks: Task[]) => void
	getTasks: () => void
	updateTask: (
		id: number,
		name: string,
		status: TaskStatus,
		content: string
	) => void
	deleteTask: (id: number) => void
}

interface ContextInterface {
	state: GlobalState
	commands: Commands
}

const Context = React.createContext<ContextInterface>({
	state: initialState,
	commands: {
		setToken: () => {},
		setUser: () => {},
		getUser: () => {},
		setTaskId: () => {},
		setTasks: () => {},
		getTasks: () => {},
		updateTask: () => {},
		deleteTask: () => {},
	},
})

export const useContext = () => React.useContext(Context)

export const GlobalProvider = (props: { children: React.ReactNode }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState)

	const setToken = (token: string) => {
		dispatch({
			type: Action.SET_TOKEN,
			token,
		})
	}

	const setUser = (user: UserInterface) => {
		dispatch({
			type: Action.SET_USER,
			user,
		})
	}

	const getUser = async () => {
		await MainService.getUser()
			.then((response) => {
				setUser(response.data)
				return response.data
			})
			.catch((error) => {
				console.error("error in GlobalProvider.getUser()", error)
			})
	}

	const setTaskId = (id: number) => {
		dispatch({
			type: Action.SET_TASK_ID,
			id,
		})
	}

	const setTasks = (tasks: Task[]) => {
		dispatch({
			type: Action.SET_TASKS,
			tasks,
		})
	}

	const getTasks = async () => {
		await MainService.getTasks()
			.then((response) => {
				setTasks(response.data)
				return response.data
			})
			.catch((error) => {
				console.error("error in GlobalProvider.getTasks", error)
			})
	}

	const updateTask = async (
		id: number,
		name: string,
		status: TaskStatus,
		content: string
	) => {
		await MainService.updateTask(id, name, status, content)
		await getTasks()
	}

	const deleteTask = async (id: number) => {
		await MainService.deleteTask(id)
		await getTasks()
	}

	const commands: Commands = {
		// getToken,
		setToken,
		setUser,
		getUser,
		setTaskId,
		setTasks,
		getTasks,
		updateTask,
		deleteTask,
	}

	return (
		<Context.Provider value={{ state, commands }}>
			{props.children}
		</Context.Provider>
	)
}

export default Context
