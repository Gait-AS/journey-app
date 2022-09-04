import { Divider, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import TopNavBar from "../../components/TopNavBar"
import { Task, useContext } from "../../Contexts/GlobalContext"
import TaskModal from "./TaskModal"

const LeaderPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<TaskModal
				isOpen={isOpen}
				onOpen={onOpen}
				onClose={onClose}
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
						<Board onOpen={onOpen} />
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
					{reactions.map((reaction) => {
						return (
							<Flex
								gap={2}
								bgColor="gray.300"
								rounded="md"
								px={3}
								py={1}
								w="fit-content"
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
					w="10%"
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
					w="20%"
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
					w="15%"
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
					43%
				</Text>
			</Flex>
		</Flex>
	)
}

const Board = ({ onOpen }: { onOpen: () => void }) => {
	const { state } = useContext()
	const { tasks } = state

	const [toDoTasks, setToDoTasks] = useState<Task[]>([])
	const [doingTasks, setDoingTasks] = useState<Task[]>([])
	const [reviewTasks, setReviewTasks] = useState<Task[]>([])
	const [doneTasks, setDoneTasks] = useState<Task[]>([])

	useEffect(() => {
		const toDo = tasks.filter((task) => task.state === "toDo")
		setToDoTasks(toDo)

		const doing = tasks.filter((task) => task.state === "doing")
		setDoingTasks(doing)

		const review = tasks.filter((task) => task.state === "review")
		setReviewTasks(review)

		const done = tasks.filter((task) => task.state === "done")
		setDoneTasks(done)
	}, [tasks])

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
					onOpen={onOpen}
					tasks={toDoTasks}
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Doing"
					emoji="😮‍💨"
					onOpen={onOpen}
					tasks={doingTasks}
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Review"
					emoji="🥶"
					onOpen={onOpen}
					tasks={reviewTasks}
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Done"
					emoji="🥳"
					onOpen={onOpen}
					tasks={doneTasks}
				/>
			</Flex>
		</Flex>
	)
}

interface TeamMemberColumnProps {
	name?: string
	emoji?: string
	onOpen: () => void
	tasks: Task[]
}

const BoardColumn: React.FC<TeamMemberColumnProps> = ({
	name = "Placeholder",
	emoji = "🫥",
	onOpen,
	tasks,
}) => {
	const { commands } = useContext()
	const { setTaskId } = commands

	const handleOpen = (id: number) => {
		onOpen()
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
			{tasks.map((task) => {
				return (
					<TaskCard
						onOpen={() => {
							handleOpen(task.id)
						}}
						title={task.name}
						description={task.description}
					/>
				)
			})}
		</Flex>
	)
}

interface TaskCardProps {
	title?: string
	description?: string
	onOpen: () => void
}

const TaskCard: React.FC<TaskCardProps> = ({
	title = "Title",
	description = "Donec gravida suspendisse tellus fermentum id lacus dui sit.",
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
					{title}
				</Text>
			</Flex>
			<Text fontSize="md">{description}</Text>
		</Flex>
	)
}
