import { Flex, Heading, Icon, Text, Image, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import IconBriefcase from "../assets/IconBriefcase"
import userImage from "../assets/userImage.png"
import { useContext } from "../Contexts/GlobalContext"
import apiClient from "../services/api"

const TopNavBar = () => {
	const { state } = useContext()

	const navigate = useNavigate()

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
			<Flex gap={3}>
				<Button
					colorScheme="purple"
					onClick={() => navigate("/master")}
				>
					master page
				</Button>
				<Button
					colorScheme="purple"
					onClick={() => navigate("/leader")}
				>
					leader page
				</Button>
				<Button
					colorScheme="purple"
					onClick={() => navigate("/member")}
				>
					member page
				</Button>
			</Flex>
			<Flex
				gap={6}
				onClick={handleLogOut}
			>
				<Flex gap={2.5}>
					<Image
						src={userImage}
						boxSize="25px"
					/>
					<Text size="lg">Ole Walberg</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default TopNavBar
