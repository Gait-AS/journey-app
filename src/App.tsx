import { useEffect } from "react"
import { useContext } from "./Contexts/GlobalContext"
import MainRouter from "./routes/MainRouter"

function App() {
	const { commands, state } = useContext()

	useEffect(() => {
		if (!state.user.id) {
			commands.getUser()
		}
	}, [])

	return <MainRouter />
}

export default App
