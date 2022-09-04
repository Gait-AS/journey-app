import { Routes, Route } from "react-router-dom"
import { useContext } from "../Contexts/GlobalContext"
import LeaderPage from "../pages/LeaderPage/LeaderPage"
import LoginPage from "../pages/LoginPage"
import MasterPage from "../pages/MasterPage/MasterPage"
import MemberPage from "../pages/MemberPage/MemberPage"
import RegisterPage from "../pages/RegisterPage"

const MainRouter = () => {
	const { state } = useContext()
	const { role } = state.user

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
			{accessLevel(role, ["master"]) && (
				<Route
					path="master"
					element={<MasterPage />}
				/>
			)}
			{accessLevel(role, ["master", "leader"]) && (
				<Route
					path="leader"
					element={<LeaderPage />}
				/>
			)}
			{accessLevel(role, ["master", "leader", "member"]) && (
				<Route
					path="member"
					element={<MemberPage />}
				/>
			)}
			<Route
				path="*"
				element={<LoginPage />}
			/>
		</Routes>
	)
}

export default MainRouter

const accessLevel = (role: string, access: string[]): boolean => {
	return access.includes(role) ? true : false
}
