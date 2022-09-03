import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Text,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import MainService from "../services/MainService"

const RegisterPage = () => {
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

const FormContainer = () => {
	const [firstName, setFirstName] = useState("")
	const [surName, setSurName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [repeatPassword, setRepeatPassword] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setIsLoading(true)

		if (password !== repeatPassword) {
			return setErrorMessage("passwords doesn't match")
		} else {
			setErrorMessage("")
		}

		const response = MainService.registerUser(
			email,
			password,
			firstName,
			surName
		)

		setIsLoading(false)

		console.log(response)
		console.log("surName", surName)
		console.log("email", email)
		console.log("password", password)
		console.log("repeatPassword", repeatPassword)
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
			<Heading color="purple.500">Register</Heading>
			<form
				action=""
				style={{ width: "100%" }}
				onSubmit={handleSubmit}
			>
				<FormControl isRequired>
					<Flex
						direction="column"
						gap={6}
					>
						<Flex direction="column">
							<FormLabel htmlFor="firstName">
								First name
							</FormLabel>
							<Input
								id="firstName"
								placeholder="Name"
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</Flex>
						<Flex direction="column">
							<FormLabel htmlFor="surName">Sur name</FormLabel>
							<Input
								id="surName"
								placeholder="Sur name"
								onChange={(e) => setSurName(e.target.value)}
							/>
						</Flex>
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
								isInvalid={
									errorMessage === "passwords doesn't match"
								}
							/>
						</Flex>
						<Flex direction="column">
							<FormLabel htmlFor="repeatPassword">
								Repeat Password
							</FormLabel>
							<Input
								id="repeatPassword"
								type="password"
								placeholder="Repeat password"
								onChange={(e) =>
									setRepeatPassword(e.target.value)
								}
								isInvalid={
									errorMessage === "passwords doesn't match"
								}
							/>
						</Flex>
						{errorMessage && (
							<ErrorMessage errorMessage={errorMessage} />
						)}
						<Flex
							direction="row"
							gap={4}
							w="full"
						>
							<Button
								w="full"
								onClick={() => navigate("/")}
							>
								Login
							</Button>
							<Button
								w="full"
								colorScheme="purple"
								type="submit"
								isLoading={isLoading}
							>
								Register
							</Button>
						</Flex>
					</Flex>
				</FormControl>
			</form>
		</Flex>
	)
}

export default RegisterPage

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
	return <Text color="red.500">{errorMessage}</Text>
}
