import { Button, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react"
import TopNavBar from "../../components/TopNavBar"
import person1 from "../../assets/profile1.png"
import { AddIcon, CheckIcon, CloseIcon, RepeatIcon } from "@chakra-ui/icons"
import { useContext } from "../../Contexts/GlobalContext"
import { useEffect } from "react"

const LeaderPage = () => {
	const { state, commands } = useContext()
	const { getProgress } = commands

	useEffect(() => {
		getProgress()
	}, [state.user])

	return (
		<>
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
					flexGrow={1}
				>
					<Flex
						direction="column"
						w="full"
						gap={4}
						flexGrow={1}
					>
						<ProgressionBar />
						<TeamMembers />
					</Flex>
					<MileStones />
				</Flex>
			</Flex>
		</>
	)
}

export default LeaderPage

const MileStones = () => {
	return (
		<Flex
			direction="column"
			minW="300px"
			gap={4}
		>
			<Heading
				color="purple.500"
				size="2xl"
			>
				Milestones
			</Heading>
			<MileStoneCard
				title="Complete navbar"
				progression={25}
				tasks={taskList1}
			/>
			<MileStoneCard
				title="Implement redux"
				progression={16}
				tasks={taskList2}
			/>
			<Flex
				w="full"
				justifyContent="center"
			>
				<Button
					colorScheme="purple"
					size="sm"
					w="fit-content"
					leftIcon={<AddIcon />}
				>
					Add milestone
				</Button>
			</Flex>
		</Flex>
	)
}

interface MileStoneCardProps {
	title: string
	progression: number
	tasks: { status: "toDo" | "doing" | "done"; description: string }[]
}

const taskList1: { status: "toDo" | "doing" | "done"; description: string }[] =
	[
		{ status: "done", description: "Add logo" },
		{ status: "done", description: "Home link" },
		{ status: "done", description: "Settings link" },
		{ status: "doing", description: "Logout icon" },
	]

const taskList2: { status: "toDo" | "doing" | "done"; description: string }[] =
	[
		{ status: "done", description: "Users slice" },
		{ status: "doing", description: "Messages slice" },
		{ status: "doing", description: "Settings slice" },
		{ status: "doing", description: "User Reducer" },
		{ status: "toDo", description: "Messages Reducer" },
		{ status: "toDo", description: "Settings Reducer" },
	]

const MileStoneCard: React.FC<MileStoneCardProps> = ({
	title = "title",
	progression = 25,
	tasks = [{ status: "toDo", description: "Add logo" }],
}) => {
	return (
		<Flex
			direction="column"
			gap={1}
		>
			<Flex
				w="full"
				justifyContent="space-between"
			>
				<Heading
					size="md"
					color="purple.900"
				>
					{title}
				</Heading>
				<Text
					fontSize="xl"
					color="purple.900"
				>
					{progression} %
				</Text>
			</Flex>
			<Flex
				direction="column"
				bgColor="white"
				rounded="lg"
				p={5}
				gap={3}
			>
				{tasks.map((task, index) => {
					return (
						<Flex
							gap={2}
							key={index}
						>
							<StatusCircle status={task.status} />
							<Text>{task.description}</Text>
						</Flex>
					)
				})}
			</Flex>
		</Flex>
	)
}

const ProgressionBar = () => {
	const team = useContext().state.progress.teams[1]

	if (!team) {
		throw new Error("team cant be undefined")
	}

	return (
		<Flex
			direction="column"
			w="full"
			gap={4}
		>
			<Heading
				color="blue.500"
				size="2xl"
			>
				Team {team.name}
			</Heading>
			<Flex
				bgColor="blue.100"
				w="full"
				h="50px"
				rounded="xl"
				overflow="hidden"
			>
				<Flex
					h="full"
					w={`${Math.round(team.percentageDone)}%`}
					bgColor="blue.400"
					alignItems="center"
					justifyContent="end"
				>
					<Text
						size="lg"
						fontWeight="medium"
						color="blue.50"
						p={2.5}
					>
						{Math.round(team.percentageDone)}%
					</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}

const TeamMembers = () => {
	return (
		<Flex
			direction="column"
			gap={4}
			flexGrow={1}
		>
			<Flex
				alignItems="center"
				gap={4}
			>
				<Heading
					color="blue.900"
					size="lg"
				>
					Team members
				</Heading>
				<Button
					colorScheme="purple"
					size="sm"
					rightIcon={<AddIcon />}
				>
					Add task
				</Button>
			</Flex>
			<Flex
				gap={6}
				flexGrow={1}
			>
				<TeamMemberColumn name="Ole" />
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<TeamMemberColumn name="Frida" />
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<TeamMemberColumn name="Lucas" />
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<Flex
					h="full"
					flexGrow={1}
					alignItems="center"
					justifyContent="center"
				>
					<Button
						colorScheme="purple"
						leftIcon={<AddIcon />}
					>
						Add member
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

interface TeamMemberColumnProps {
	name?: string
}

const TeamMemberColumn: React.FC<TeamMemberColumnProps> = ({
	name = "Placeholder",
}) => {
	return (
		<Flex
			alignItems="start"
			direction="column"
			gap={3}
		>
			<Flex
				gap={3}
				alignItems="center"
			>
				<Text
					fontWeight="medium"
					fontSize="2xl"
					color="purple.900"
				>
					{name}
				</Text>
				<Image
					src={person1}
					boxSize="30px"
				/>
			</Flex>
			<TaskCard />
			<TaskCard status="doing" />
			<TaskCard status="done" />
		</Flex>
	)
}

interface TaskCardProps {
	title?: string
	description?: string
	status?: "toDo" | "doing" | "done"
}

const TaskCard: React.FC<TaskCardProps> = ({
	title = "Title",
	description = "Donec gravida suspendisse tellus fermentum id lacus dui sit.",
	status = "toDo",
}) => {
	return (
		<Flex
			bgColor="white"
			rounded="xl"
			p={5}
			gap={1}
			w="full"
			direction="column"
			maxW="285px"
		>
			<Flex
				w="full"
				justifyContent="space-between"
			>
				<Text
					fontSize="lg"
					fontWeight="semibold"
				>
					{title}
				</Text>
				<StatusCircle status={status} />
			</Flex>
			<Text fontSize="md">{description}</Text>
		</Flex>
	)
}

interface StatusCircleProps {
	status: "toDo" | "doing" | "done"
}

const StatusCircle: React.FC<StatusCircleProps> = ({ status }) => {
	const getIcon = (status: "toDo" | "doing" | "done") => {
		if (status === "toDo") {
			return (
				<CloseIcon
					boxSize="10px"
					color="red.50"
				/>
			)
		}

		if (status === "doing") {
			return (
				<RepeatIcon
					boxSize="10px"
					color="orange.50"
				/>
			)
		}

		return (
			<CheckIcon
				boxSize="10px"
				color="green.50"
			/>
		)
	}

	return (
		<Flex
			w="25px"
			h="25px"
			rounded="full"
			justifyContent="center"
			alignItems="center"
			bgColor={
				status === "toDo"
					? "red.400"
					: status === "doing"
					? "orange.400"
					: "green.400"
			}
		>
			{getIcon(status)}
		</Flex>
	)
}
