import apiClient from "../services/api";

class MainService {
	authenticate = async (email: string, password: string) => {
		const csrf = () => apiClient.get("/sanctum/csrf-cookie");

		await apiClient
			.post("/api/auth/authenticate", {
				email: email,
				password: password,
			})
			.then((response) => {
				localStorage.setItem("token", response.data.data);
				console.log(response);
			});
	};
}

const MainServiceProvider = new MainService();

export default MainServiceProvider;
