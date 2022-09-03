import { Divider, Flex, Heading, Text } from "@chakra-ui/react"
import TopNavBar from "../../components/TopNavBar"

const LeaderPage = () => {
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
				flexGrow={1}
			>
				<Flex
					direction="column"
					w="full"
					gap={4}
					flexGrow={1}
				>
					<ProgressionBar />
					<Board />
				</Flex>
				<Billboard />
			</Flex>
		</Flex>
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

const Board = () => {
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
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Doing"
					emoji="😮‍💨"
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Review"
					emoji="🥶"
				/>
				<Divider
					orientation="vertical"
					borderColor="gray.400"
				/>
				<BoardColumn
					name="Done"
					emoji="🥳"
				/>
			</Flex>
		</Flex>
	)
}

interface TeamMemberColumnProps {
	name?: string
	emoji?: string
}

const BoardColumn: React.FC<TeamMemberColumnProps> = ({
	name = "Placeholder",
	emoji = "🫥",
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
			<TaskCard />
			<TaskCard />
			<TaskCard />
		</Flex>
	)
}

interface TaskCardProps {
	title?: string
	description?: string
}

const TaskCard: React.FC<TaskCardProps> = ({
	title = "Title",
	description = "Donec gravida suspendisse tellus fermentum id lacus dui sit.",
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
			</Flex>
			<Text fontSize="xl">{description}</Text>
		</Flex>
	)
}
