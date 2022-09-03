import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "./Contexts/GlobalContext"
import MainRouter from "./routes/MainRouter"

function App() {
	const { state, commands } = useContext()
	const { token, user } = state
	const { setUser, setToken, getUser } = commands

	useEffect(() => {
		getUser()
	}, [token])

	const navigate = useNavigate()

	useEffect(() => {
		if (user.id === 0) {
			return navigate("/")
		}

		if (user.role === "master") {
			return navigate("/master")
		}

		if (user.role === "leader") {
			return navigate("/leader")
		}

		if (user.role === "member") {
			return navigate("/member")
		}

		navigate("/")
	}, [user.id])

	return <MainRouter />
}

export default App
