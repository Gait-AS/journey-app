import { Flex, Text } from "@chakra-ui/react"

const MasterPage = () => {
	return (
		<Flex
			direction="column"
			bg="gray.100"
			minH="100vh"
			p={26}
			justify="center"
			align="center"
		>
			<TeamsSection />
			<PeopleSection />
		</Flex>
	)
}

export default MasterPage

const TeamsSection = () => {
	return <Text>Team section</Text>
}

const PeopleSection = () => {
	return <Text>People Section</Text>
}
