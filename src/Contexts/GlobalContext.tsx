import React from "react"
import MainService from "../services/MainService"
import { reducer, Action } from "./GlobalReducer"

export interface UserInterface {
	id: number
	firstName: string
	lastName: string
	email: string
	currentProjectId: number
	team: string
	role: string
}

export interface GlobalState {
	token: string
	user: UserInterface
}

export const initialUserState: UserInterface = {
	id: 0,
	firstName: "",
	lastName: "",
	email: "",
	currentProjectId: 0,
	team: "",
	role: "",
}

const initialState: GlobalState = {
	token: "",
	user: initialUserState,
}

export interface Commands {
	// getToken: () => Promise<string>
	setToken: (token: string) => void
	setUser: (user: UserInterface) => void
	getUser: (token: string) => void
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

	const getUser = async (token: string) => {
		await MainService.getUser(token)
			.then((response) => {
				setUser(response.data)
			})
			.catch((error) => {
				console.error("error in GlobalProvider.getUser()", error)
			})
	}

	const commands: Commands = {
		// getToken,
		setToken,
		setUser,
		getUser,
	}

	return (
		<Context.Provider value={{ state, commands }}>
			{props.children}
		</Context.Provider>
	)
}

export default Context
