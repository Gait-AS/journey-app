import { Flex, Heading, Icon, Text, Image } from "@chakra-ui/react"
import IconBriefcase from "../assets/IconBriefcase"
import userImage from "../assets/userImage.png"
import apiClient from "../services/api"

const TopNavBar = () => {
	const handleLogOut = () => {
		console.log("log out")

		apiClient.get("/api/logout")
	}

	return (
		<Flex
			w="full"
			px={16}
			py={3}
			justifyContent="space-between"
		>
			<Flex
				gap={3}
				alignItems="center"
			>
				<Heading
					color="purple.500"
					size="md"
				>
					Journey
				</Heading>
				<Icon fill="purple.500">
					<IconBriefcase />
				</Icon>
			</Flex>
			<Flex
				gap={2.5}
				onClick={handleLogOut}
			>
				<Image
					src={userImage}
					boxSize="25px"
				/>
				<Text size="lg">Ole Walberg</Text>
			</Flex>
		</Flex>
	)
}

export default TopNavBar
