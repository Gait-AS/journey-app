import React from "react"
import MainService from "../services/MainService"
import { reducer, Action } from "./GlobalReducer"

export interface GlobalState {
	token: string
	user: UserInterface
	taskId: number
	tasks: Task[]
	progress: Progress
}

export interface UserInterface {
	id: number
	firstName: string
	lastName: string
	email: string
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

interface Team {
	name: string
	totalTasks: number
	doneTasks: number
	notDoneTasks: number
	percentageDone: number
}

export interface Progress {
	total: number
	teams: Team[]
}

export const initialUserState: UserInterface = {
	id: 0,
	firstName: "",
	lastName: "",
	email: "",
	teamId: 0,
	role: "",
}

const initialState: GlobalState = {
	token: "",
	user: initialUserState,
	taskId: 0,
	tasks: [],
	progress: {
		total: 0,
		teams: [
			{
				name: "",
				totalTasks: 0,
				doneTasks: 0,
				notDoneTasks: 0,
				percentageDone: 0,
			},
		],
	},
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
	createTask: (name: string, content: string, id: number) => void
	setProgress: (progress: Progress) => void
	getProgress: () => void
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
		createTask: () => {},
		setProgress: () => {},
		getProgress: () => {},
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
				const data = response.data
				const convert: UserInterface = {
					id: data.id,
					firstName: data.first_name,
					lastName: data.last_name,
					email: data.email,
					teamId: data.team_id,
					role: data.role,
				}

				setUser(convert)
				return convert
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

	const createTask = async (name: string, content: string, id: number) => {
		await MainService.createTask(name, content, id)
		await getTasks()
	}

	const setProgress = (progress: Progress) => {
		dispatch({
			type: Action.SET_PROGRESS,
			progress,
		})
	}

	const getProgress = async () => {
		const result = await MainService.getProgress()
		const data = result.data
		const convert = {
			total: data.total,
			teams: [] as Team[],
		}

		data.teams.forEach((team) => {
			convert.teams.push({
				name: team.name,
				totalTasks: team.total_tasks,
				doneTasks: team.done_tasks,
				notDoneTasks: team.not_done_tasks,
				percentageDone: team.percentage_done,
			})
		})

		setProgress(convert)
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
		createTask,
		setProgress,
		getProgress,
	}

	return (
		<Context.Provider value={{ state, commands }}>
			{props.children}
		</Context.Provider>
	)
}

export default Context
