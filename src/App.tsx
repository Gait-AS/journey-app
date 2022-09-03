import React from "react"
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
			id: 0,
			firstName: "",
			lastName: "",
			email: "",
			currentProjectId: 0,
			team: "",
			role: "",
		})
	}, [])

	const navigate = useNavigate()

	useEffect(() => {
		console.log(user)

		if (!token || !user) {
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
	}, [user.role])

	return <MainRouter />
}

export default App
