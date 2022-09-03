import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react"
import React from "react"
import MainService from "../services/MainService"
import { useNavigate } from "react-router-dom"
import { useContext } from "../Contexts/GlobalContext"

const LoginPage = () => {
	return (
		<Flex
			direction="column"
			bg="gray.100"
			minH="100vh"
			p={26}
			justify="center"
			align="center"
		>
			<FormContainer />
		</Flex>
	)
}

export default LoginPage

const FormContainer = () => {
	const { commands, state } = useContext()
	const { setToken, getUser } = commands
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	const [isLoading, setIsLoading] = React.useState(false)

	const navigate = useNavigate()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		const response = await MainService.authenticate(email, password)

		setIsLoading(false)

		if (!response.status) {
			return console.log("login failed")
		}

		console.log(response)

		setToken(response.data)
		getUser()
		navigate("/")
	}

	return (
		<Flex
			bg="white"
			direction="column"
			p={9}
			justifyContent="center"
			alignItems="center"
			gap={6}
			rounded="2xl"
			minW="400px"
		>
			<Heading color="purple.500">Login</Heading>
			<form
				action=""
				style={{ width: "100%" }}
				onSubmit={handleSubmit}
			>
				<FormControl>
					<Flex
						direction="column"
						gap={6}
					>
						<Flex direction="column">
							<FormLabel htmlFor="email">Email</FormLabel>
							<Input
								id="email"
								type="email"
								placeholder="example@provider.com"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Flex>
						<Flex direction="column">
							<FormLabel htmlFor="password">Password</FormLabel>
							<Input
								id="password"
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Flex>
						<Flex
							direction="row"
							gap={4}
							w="full"
						>
							<Button
								w="full"
								onClick={() => navigate("register")}
							>
								Register
							</Button>
							<Button
								w="full"
								colorScheme="purple"
								type="submit"
								isLoading={isLoading}
							>
								Login
							</Button>
							<Button
								w="full"
								colorScheme="purple"
								onClick={() => console.log(state)}
							>
								log
							</Button>
						</Flex>
					</Flex>
				</FormControl>
			</form>
		</Flex>
	)
}
