import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "./Contexts/GlobalContext"
import MainRouter from "./routes/MainRouter"

function App() {
	const { state } = useContext()
	const { token, user } = state

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

		console.log("no role found")
		navigate("/")
	}, [user.role])

	return <MainRouter />
}

export default App
