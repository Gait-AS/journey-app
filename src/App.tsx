import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "./Contexts/GlobalContext"
import MainRouter from "./routes/MainRouter"

function App() {
	const { state, commands } = useContext()
	const { token, user } = state
	const { setUser, setToken } = commands

	useEffect(() => {
		setToken("hei")
		setUser({
			id: 1,
			firstName: "",
			lastName: "",
			email: "",
			currentProjectId: 0,
			team: "",
			role: "master",
		})
	}, [])

	return <MainRouter />
}

export default App
