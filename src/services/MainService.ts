const DEV_URL = "http://172.16.19.108:80/api"

class MainService {
	authenticate = async (email: string, password: string) => {
		const formData = new FormData()
		formData.append("email", email)
		formData.append("password", password)

		const requestOptions = {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		}

		await fetch(
			`http://172.16.19.108:80/api/auth/authenticate`,
			requestOptions
		)
			.then((response) => console.log(response))
			.catch((error) => console.error("authenticate failed:", error))
	}

	static getUser = async () => {
		await fetch(`${DEV_URL}/user`)
	}
}

const MainServiceProvider = new MainService()

export default MainServiceProvider

MainServiceProvider.authenticate("ole@walberg.com", "test")
