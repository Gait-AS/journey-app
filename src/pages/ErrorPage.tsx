import { Flex, Heading } from "@chakra-ui/react"

const ErrorPage = () => {
	return (
		<Flex
			direction="column"
			bg="gray.100"
			minH="100vh"
			p={26}
			justify="center"
			align="center"
		>
			<Heading>something went wrong</Heading>
		</Flex>
	)
}

export default ErrorPage
