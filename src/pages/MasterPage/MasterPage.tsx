import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import Team from "../../components/Team"
import TopNavBar from "../../components/TopNavBar"
import person1 from "../../assets/profile1.png"
import person2 from "../../assets/profile2.png"
import person3 from "../../assets/profile3.png"
import person4 from "../../assets/profile4.png"
import person5 from "../../assets/profile5.png"
import { AddIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import { useContext } from "../../Contexts/GlobalContext"
import { useEffect } from "react"

const MasterPage = () => {
	const { state } = useContext()
	const { user } = state
	const { role } = user

	const navigate = useNavigate()

	// useEffect(() => {
	// 	if (role === "master" || role === "leader") {
	// 		return
	// 	}

	// 	navigate("/")
	// }, [])

	return (
		<Flex
			direction="column"
			bg="gray.100"
			minH="100vh"
		>
			<header>
				<TopNavBar />
			</header>
			<Flex
				as="main"
				pt={4}
				px={16}
				gap={6}
			>
				<TeamsSection />
				<PeopleSection />
			</Flex>
		</Flex>
	)
}

export default MasterPage

const TeamsSection = () => {
	return (
		<Flex
			direction="column"
			gap={6}
			w="full"
			justifyContent="start"
		>
			<Heading
				size="2xl"
				color="purple.500"
			>
				Teams
			</Heading>
			<Team
				name="Frontend"
				percentage={35}
				currentMilestone="Complete task page"
				color="blue"
			/>
			<Team
				name="Backend"
				percentage={25}
				currentMilestone="Create docker image"
				color="red"
			/>
			<Team
				name="Design"
				percentage={30}
				currentMilestone="Figure out what font to use"
				color="orange"
			/>
			<Button
				w="fit-content"
				colorScheme="purple"
				leftIcon={<AddIcon />}
				size="md"
			>
				Add team
			</Button>
		</Flex>
	)
}

const PeopleSection = () => {
	const members = [
		{
			name: "Linus Johansen",
			image: person1,
		},
		{
			name: "Dennis Fagstrøm",
			image: person2,
		},
		{
			name: "Ole Walberg",
			image: person3,
		},
		{
			name: "Emma Berg",
			image: person4,
		},
		{
			name: "Lucas Halvorsen",
			image: person5,
		},
	]

	return (
		<Flex
			minW="300px"
			direction="column"
			gap={4}
		>
			<Heading
				size="2xl"
				color="purple.500"
			>
				People
			</Heading>
			<PeopleGroup
				title="Masters"
				members={members}
			/>
			<PeopleGroup
				title="Leaders"
				members={members}
			/>
			<PeopleGroup
				title="Members"
				members={members}
			/>
			<Button
				colorScheme="purple"
				leftIcon={<AddIcon />}
				w="fit-content"
			>
				Invite teammates
			</Button>
		</Flex>
	)
}

interface PeopleGroupProps {
	title: string
	members: { name: string; image: string }[]
}

const PeopleGroup: React.FC<PeopleGroupProps> = ({ title, members }) => {
	return (
		<Flex
			direction="column"
			gap={1.5}
		>
			<Heading
				color="purple.900"
				size="md"
			>
				{title}
			</Heading>
			<Flex
				bg="white"
				rounded="lg"
				p={4}
				direction="column"
				gap={3}
			>
				{members.map((member) => {
					return (
						<Flex gap={2}>
							<Image
								src={member.image}
								boxSize="25px"
							/>
							<Text
								size="lg"
								color="purple.900"
							>
								{member.name}
							</Text>
						</Flex>
					)
				})}
			</Flex>
		</Flex>
	)
}
