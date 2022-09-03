import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

const MainRouter = () => {
	return (
		<Routes>
			<Route
				index
				element={<LoginPage />}
			/>
			<Route
				path="register"
				element={<RegisterPage />}
			/>
		</Routes>
	)
}

export default MainRouter
