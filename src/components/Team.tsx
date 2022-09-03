import { Text, Flex, Heading, Button, Image } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import person1 from "../assets/profile1.png"
import person2 from "../assets/profile2.png"
import person3 from "../assets/profile3.png"
import person4 from "../assets/profile4.png"
import person5 from "../assets/profile5.png"

interface TeamProps {
	name: string
	percentage: number
	currentMilestone: string
	color: string
	numberOfMembers?: number
}

const Team: React.FC<TeamProps> = ({
	name = "teamName",
	percentage,
	currentMilestone,
	color,
	numberOfMembers,
}) => {
	return (
		<Flex
			bg="white"
			rounded="xl"
			w="full"
			p={9}
			direction="column"
			gap={3}
		>
			<Flex
				w="full"
				justifyContent="space-between"
			>
				<Heading color={`${color}.900`}>{name}</Heading>
				<Members />
			</Flex>

			<ProgressBar
				color={color}
				percentage={percentage}
			/>

			<Flex
				w="full"
				justifyContent="space-between"
			>
				<CurrentMilestone
					color={color}
					currentMilestone={currentMilestone}
				/>
				<Button
					size="sm"
					colorScheme={color}
					rightIcon={<ChevronRightIcon />}
				>
					Manage team
				</Button>
			</Flex>
		</Flex>
	)
}

export default Team

interface ProgressBarProps {
	color: string
	percentage: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ color, percentage }) => {
	return (
		<Flex
			h="36px"
			w="full"
			rounded="xl"
			bg={`${color}.100`}
			overflow="hidden"
		>
			<Flex
				h="full"
				w={`${percentage}%`}
				bg={`${color}.400`}
				justifyContent="end"
				alignItems="center"
				px={3}
			>
				<Text
					color={`${color}.50`}
					size="lg"
				>
					{percentage}%
				</Text>
			</Flex>
		</Flex>
	)
}

interface CurrentMilestoneProps {
	color: string
	currentMilestone: string
}

const CurrentMilestone: React.FC<CurrentMilestoneProps> = ({
	color,
	currentMilestone,
}) => {
	return (
		<Flex
			gap={2}
			color={`${color}.800`}
		>
			<Text fontWeight={500}>Current milestone:</Text>
			<Text>{currentMilestone}</Text>
		</Flex>
	)
}

const Members = () => {
	const images = [person1, person2, person3, person4, person5]

	return (
		<Flex gap={3}>
			{images.map((image) => {
				return (
					<Image
						boxSize="25px"
						src={image}
					/>
				)
			})}
		</Flex>
	)
}
