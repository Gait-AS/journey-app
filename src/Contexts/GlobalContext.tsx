import React from "react"
import { reducer, Action } from "./GlobalReducer"

export interface GlobalState {
	token: string
}

const initialState: GlobalState = {
	token: "",
}

export interface Commands {
	// getToken: () => Promise<string>
	setToken: (token: string) => void
}

interface ContextInterface {
	state: GlobalState
	commands: Commands
}

const Context = React.createContext<ContextInterface>({
	state: initialState,
	commands: {
		// getToken: () => Promise.resolve(""),
		setToken: () => {},
	},
})

export const useContext = () => React.useContext(Context)

export const Provider = (props: { children: React.ReactNode }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState)

	// const getToken = async () => {
	// 	const { token } = state

	// 	if (token) return token
	// }

	const setToken = (token: string) => {
		dispatch({
			type: Action.SET_TOKEN,
			token,
		})
	}

	const commands: Commands = {
		// getToken,
		setToken,
	}

	return (
		<Context.Provider value={{ state, commands }}>
			{props.children}
		</Context.Provider>
	)
}

export default Context
