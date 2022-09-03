import { Routes, Route } from "react-router-dom"
import LeaderPage from "../pages/LeaderPage"
import LoginPage from "../pages/LoginPage"
import MasterPage from "../pages/MasterPage"
import MemberPage from "../pages/MemberPage"
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
			<Route
				path="master"
				element={<MasterPage />}
			/>
			<Route
				path="leader"
				element={<LeaderPage />}
			/>
			<Route
				path="member"
				element={<MemberPage />}
			/>
		</Routes>
	)
}

export default MainRouter
