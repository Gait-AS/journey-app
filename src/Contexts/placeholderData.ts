import { Task } from "./GlobalContext"

export const placeHolderTasks: Task[] = [
	{
		id: 1,
		name: "Add logo",
		content: "The logo needs to be added as a svg",
		status: "todo",
	},
	{
		id: 2,
		name: "Home link",
		content:
			"The logo and name needs to be a link that takes the user back to the dashboard",
		status: "doing",
	},
	{
		id: 3,
		name: "Settings link",
		content:
			"The logo and name needs to be a link that takes the user back to the dashboard",
		status: "review",
	},
	{
		id: 4,
		name: "Logout icon",
		content:
			"There should be a logout icon that when on click logs the user out of the application",
		status: "done",
	},
	{
		id: 5,
		name: "Profile tab",
		content:
			"The profile tab should consist of the user image and their name",
		status: "done",
	},
]
