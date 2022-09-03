import { GlobalState } from "./GlobalContext"

export enum Action {
	SET_TOKEN,
}

export type ActionType = {
	type: Action.SET_TOKEN
	token: string
}

export const reducer = (state: GlobalState, action: ActionType) => {
	switch (action.type) {
		case Action.SET_TOKEN: {
			return { ...state, token: action.token }
		}
	}
}
