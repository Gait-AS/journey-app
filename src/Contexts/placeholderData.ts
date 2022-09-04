import { Task } from "./GlobalContext"

export const placeHolderTasks: Task[] = [
	{
		id: 1,
		name: "Add logo",
		description: "The logo needs to be added as a svg",
		state: "toDo",
	},
	{
		id: 2,
		name: "Home link",
		description:
			"The logo and name needs to be a link that takes the user back to the dashboard",
		state: "doing",
	},
	{
		id: 3,
		name: "Settings link",
		description:
			"The logo and name needs to be a link that takes the user back to the dashboard",
		state: "review",
	},
	{
		id: 4,
		name: "Logout icon",
		description:
			"There should be a logout icon that when on click logs the user out of the application",
		state: "done",
	},
	{
		id: 5,
		name: "Profile tab",
		description:
			"The profile tab should consist of the user image and their name",
		state: "done",
	},
]
