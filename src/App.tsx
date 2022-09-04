import { useEffect } from "react"
import { useContext } from "./Contexts/GlobalContext"
import MainRouter from "./routes/MainRouter"

function App() {
	const { commands } = useContext()
	const { setUser } = commands

	// useEffect(() => {
	// 	setUser({
	// 		id: 1,
	// 		firstName: "",
	// 		lastName: "",
	// 		email: "",
	// 		currentProjectId: 0,
	// 		team: "",
	// 		role: "master",
	// 	})
	// }, [])

	return <MainRouter />
}

export default App
