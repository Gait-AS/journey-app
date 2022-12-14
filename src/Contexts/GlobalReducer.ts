import { GlobalState, Progress, Task, UserInterface } from "./GlobalContext"

export enum Action {
	SET_TOKEN,
	SET_USER,
	SET_TASK_ID,
	SET_TASKS,
	SET_PROGRESS,
}

export type ActionType =
	| {
			type: Action.SET_TOKEN
			token: string
	  }
	| {
			type: Action.SET_USER
			user: UserInterface
	  }
	| {
			type: Action.SET_TASK_ID
			id: number
	  }
	| {
			type: Action.SET_TASKS
			tasks: Task[]
	  }
	| {
			type: Action.SET_PROGRESS
			progress: Progress
	  }

export const reducer = (state: GlobalState, action: ActionType) => {
	switch (action.type) {
		case Action.SET_TOKEN: {
			return { ...state, token: action.token }
		}

		case Action.SET_USER: {
			return { ...state, user: action.user }
		}

		case Action.SET_TASK_ID: {
			return { ...state, taskId: action.id }
		}

		case Action.SET_TASKS: {
			return { ...state, tasks: action.tasks }
		}

		case Action.SET_PROGRESS: {
			return { ...state, progress: action.progress }
		}
	}
}
