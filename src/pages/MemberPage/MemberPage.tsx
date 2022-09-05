import { AddIcon } from "@chakra-ui/icons"
import {
	Button,
	Divider,
	Flex,
	Heading,
	Text,
	useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import TopNavBar from "../../components/TopNavBar"
import { Task, useContext } from "../../Contexts/GlobalContext"
import CreateTaskModal from "./CreateTaskModal"
import TaskModal from "./ManageTaskModal"

const LeaderPage = () => {
	const { state, commands } = useContext()
	const { getTasks, getProgress } = commands
	const {
		isOpen: isManageOpen,
		onOpen: onManageOpen,
		onClose: onManageClose,
	} = useDisclosure()
	const {
		isOpen: isCreateOpen,
		onOpen: onCreateOpen,
		onClose: onCreateClose,
	} = useDisclosure()

	useEffect(() => {
		getTasks()
	}, [state.user.role])

	useEffect(() => {
		getProgress()
	}, [state.user])

	return (
		<>
			<TaskModal
				isOpen={isManageOpen}
				onOpen={onManageOpen}
				onClose={onManageClose}
			/>
			<CreateTaskModal
				isOpen={isCreateOpen}
				onOpen={onCreateOpen}
				onClose={onCreateClose}
			/>
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
						<Board
							onManageOpen={onManageOpen}
							onCreateOpen={onCreateOpen}
						/>
					</Flex>
					<Billboard />
				</Flex>
			</Flex>
		</>
	)
}

export default LeaderPage

const Billboard = () => {
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
				Billboard
			</Heading>
			<BillboardItem
				title="Team frontend completed"
				description="Donec gravida suspendisse in aliquet a ac tincidunt ut est. "
				reactions={reactionList1}
			/>
			<BillboardItem
				title="Team backend completed"
				description="Ipsum quis egestas porta id diam egestas."
				reactions={reactionList2}
			/>
			<BillboardItem
				title="Team design completed"
				description="Convallis curabitur egestas tortor magna quis. Id sit tincidunt id interdum in."
				reactions={reactionList3}
			/>
			<BillboardItem
				title="Team backend completed"
				description="Lobortis nunc rhoncus id feugiat sit."
				reactions={reactionList4}
			/>
		</Flex>
	)
}

const reactionList1 = [
	{
		emoji: "😍",
		count: 3,
	},
	{
		emoji: "🎉",
		count: 4,
	},
	{
		emoji: "🤑",
		count: 1,
	},
]

const reactionList2 = [
	{
		emoji: "🤩",
		count: 2,
	},
	{
		emoji: "🥰",
		count: 6,
	},
	{
		emoji: "🤓",
		count: 1,
	},
]

const reactionList3 = [
	{
		emoji: "😏",
		count: 2,
	},
	{
		emoji: "🫶",
		count: 1,
	},
]

const reactionList4 = [
	{
		emoji: "🥳",
		count: 2,
	},
	{
		emoji: "🤩",
		count: 6,
	},
]

interface BillboardItemProps {
	title: string
	description: string
	reactions?: { emoji: string; count: number }[]
}

const BillboardItem: React.FC<BillboardItemProps> = ({
	title = "title",
	description = "default description",
	reactions = [
		{ emoji: "🎉", count: 3 },
		{ emoji: "🥳", count: 5 },
	],
}) => {
	return (
		<Flex
			direction="column"
			gap={2}
			maxW="300px"
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
			</Flex>
			<Flex
				direction="column"
				bgColor="white"
				rounded="lg"
				p={5}
				gap={3}
			>
				<Text fontSize="lg">{description}</Text>
				<Flex gap={2}>
					{reactions.map((reaction, index) => {
						return (
							<Flex
								gap={2}
								bgColor="gray.300"
								rounded="md"
								px={3}
								py={1}
								w="fit-content"
								key={index}
							>
								<Text>{reaction.emoji}</Text>
								<Text>{reaction.count}</Text>
							</Flex>
						)
					})}
				</Flex>
			</Flex>
		</Flex>
	)
}

const ProgressionBar = () => {
	const { teams } = useContext().state.progress

	let totalProgress = 0

	teams.forEach((team) => {
		totalProgress = totalProgress + team.percentageDone
	})

	let frontendPercent = 0

	if (teams[0]) {
		frontendPercent = teams[0].percentageDone
	}

	let backendPercent = 0

	if (teams[1]) {
		backendPercent = teams[1].percentageDone
	}

	let designPercent = 0

	if (teams[2]) {
		designPercent = teams[2].percentageDone
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
				Overall progress
			</Heading>
			<Flex
				alignItems="center"
				bgColor="blue.100"
				w="full"
				h="50px"
				rounded="xl"
				overflow="hidden"
			>
				<Flex
					h="full"
					w={`${frontendPercent}%`}
					bgColor="blue.400"
					alignItems="center"
					justifyContent="end"
				>
					<Text
						size="lg"
						fontWeight="medium"
						color="blue.900"
						p={2.5}
					>
						Frontend
					</Text>
				</Flex>
				<Flex
					h="full"
					w={`${backendPercent}%`}
					bgColor="red.400"
					alignItems="center"
					justifyContent="end"
				>
					<Text
						size="lg"
						fontWeight="medium"
						color="orange.900"
						p={2.5}
					>
						Backend
					</Text>
				</Flex>
				<Flex
					h="full"
					w={`${designPercent}%`}
					bgColor="orange.400"
					alignItems="center"
					justifyContent="end"
				>
					<Text
						size="lg"
						fontWeight="medium"
						color="orange.900"
						p={2.5}
					>
						Design
					</Text>
				</Flex>
				<Text
					ml={3}
					fontWeight="medium"
				>
					{Math.round(totalProgress)}%
				</Text>
			</Flex>
		</Flex>
	)
}

const Board = ({
	onManageOpen,
	onCreateOpen,
}: {
	onManageOpen: () => void
	onCreateOpen: () => void
}) => {
	const { state } = useContext()
	const { tasks } = state

	const [toDoTasks, setToDoTasks] = useState<Task[]>([])
	const [doingTasks, setDoingTasks] = useState<Task[]>([])
	const [reviewTasks, setReviewTasks] = useState<Task[]>([])
	const [doneTasks, setDoneTasks] = useState<Task[]>([])

	useEffect(() => {
		const toDo = tasks.filter((task) => task.status === "todo")
		setToDoTasks(toDo)

		const doing = tasks.filter((task) => task.status === "doing")
		setDoingTasks(doing)

		const review = tasks.filter((task) => task.status === "review")
		setReviewTasks(review)

		const done = tasks.filter((task) => task.status === "done")
		setDoneTasks(done)
	}, [tasks])

	return (
		<Flex
			direction="column"
			gap={4}
			flexGrow={1}
			pb={40}
		>
			<Flex
				alignItems="center"
				gap={4}
			>
				<Heading
					color="blue.900"
					size="lg"
				>
					Board
				</Heading>
			</Flex>
			<Flex
				gap={6}
				flexGrow={1}
			>
				<BoardColumn
					name="To do"
					emoji="🧐"
					onManageOpen={onManageOpen}
					tasks={toDoTasks}
					bottomButton={
						<Button
							colorScheme="purple"
							leftIcon={<AddIcon />}
							onClick={onCreateOpen}
						>
							Create task
						</Button>
					}
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Doing"
					emoji="😮‍💨"
					onManageOpen={onManageOpen}
					tasks={doingTasks}
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Review"
					emoji="🥶"
					onManageOpen={onManageOpen}
					tasks={reviewTasks}
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Done"
					emoji="🥳"
					onManageOpen={onManageOpen}
					tasks={doneTasks}
				/>
			</Flex>
		</Flex>
	)
}

interface TeamMemberColumnProps {
	name?: string
	emoji?: string
	onManageOpen: () => void
	onCreateOpen?: () => void
	tasks: Task[]
	bottomButton?: React.ReactNode
}

const BoardColumn: React.FC<TeamMemberColumnProps> = ({
	name = "Placeholder",
	emoji = "🫥",
	onManageOpen,
	onCreateOpen,
	tasks,
	bottomButton,
}) => {
	const { commands } = useContext()
	const { setTaskId } = commands

	const handleOpen = (id: number) => {
		onManageOpen()
		setTaskId(id)
	}

	return (
		<Flex
			alignItems="start"
			direction="column"
			gap={3}
		>
			<Flex
				gap={3}
				alignItems="center"
				justifyContent="space-between"
			>
				<Text
					fontWeight="medium"
					fontSize="2xl"
					color="purple.900"
				>
					{name}
				</Text>
				<Text
					fontWeight="medium"
					fontSize="2xl"
					color="purple.900"
				>
					{emoji}
				</Text>
			</Flex>
			{tasks.map((task, index) => {
				return (
					<TaskCard
						key={index}
						onOpen={() => {
							handleOpen(task.id)
						}}
						name={task.name}
						content={task.content}
					/>
				)
			})}
			{bottomButton && bottomButton}
		</Flex>
	)
}

interface TaskCardProps {
	name?: string
	content?: string
	onOpen: () => void
}

const TaskCard: React.FC<TaskCardProps> = ({
	name = "Title",
	content = "Donec gravida suspendisse tellus fermentum id lacus dui sit.",
	onOpen,
}) => {
	const [isHovering, setIsHovering] = useState(false)

	return (
		<Flex
			bgColor="white"
			rounded="xl"
			p={5}
			gap={1}
			w="full"
			direction="column"
			maxW="285px"
			minW="200px"
			onClick={onOpen}
			boxShadow={isHovering ? "outline" : "none"}
			style={{ cursor: isHovering ? "pointer" : "default" }}
			onMouseOver={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<Flex
				w="full"
				justifyContent="space-between"
			>
				<Text
					fontSize="lg"
					fontWeight="semibold"
				>
					{name}
				</Text>
			</Flex>
			<Text fontSize="md">{content}</Text>
		</Flex>
	)
}
