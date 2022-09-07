import { Routes, Route } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import LeaderPage from "../pages/LeaderPage/LeaderPage"
import LoginPage from "../pages/LoginPage"
import MasterPage from "../pages/MasterPage/MasterPage"
import MemberPage from "../pages/MemberPage/MemberPage"
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
			<Route
				path="*"
				element={<ErrorPage />}
			/>
		</Routes>
	)
}

export default MainRouter

const accessLevel = (role: string, access: string[]): boolean => {
	return access.includes(role) ? true : false
}
