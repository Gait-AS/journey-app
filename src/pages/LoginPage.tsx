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
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	const [isLoading, setIsLoading] = React.useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		const response = await MainService.authenticate(email, password)
		setIsLoading(false)
		console.log(response)
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
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								placeholder="example@provider.com"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Flex>
						<Flex direction="column">
							<FormLabel>Password</FormLabel>
							<Input
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
							<Button w="full">Register</Button>
							<Button
								w="full"
								colorScheme="purple"
								type="submit"
								isLoading={isLoading}
							>
								Login
							</Button>
						</Flex>
					</Flex>
				</FormControl>
			</form>
		</Flex>
	)
}
