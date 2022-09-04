import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Textarea,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { TaskState, useContext } from "../../Contexts/GlobalContext"

interface TaskModalProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onOpen, onClose }) => {
	const { state } = useContext()
	const { tasks, taskId } = state

	const selectedTask = tasks.find((task) => task.id === taskId)

	const [name, setName] = useState(selectedTask?.name)
	const [taskState, setTaskState] = useState(selectedTask?.state)
	const [description, setDescription] = useState(selectedTask?.description)

	useEffect(() => {
		const selectedTask = tasks.find((task) => task.id === taskId)

		setName(selectedTask?.name)
		setTaskState(selectedTask?.state)
		setDescription(selectedTask?.description)
	}, [taskId])

	const handleClose = () => {
		setName("")
		setTaskState("doing")
		setDescription("")
		onClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Manage task</ModalHeader>

				<ModalCloseButton />

				<ModalBody>
					<Flex
						gap={3}
						direction="column"
					>
						<FormControl>
							<FormLabel>Task name</FormLabel>
							<Input
								placeholder="Task name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>State</FormLabel>
							<Select
								placeholder="Select state"
								value={taskState}
								onChange={(e) =>
									setTaskState(e.target.value as TaskState)
								}
							>
								<option value="toDo">To do</option>
								<option value="doing">Doing</option>
								<option value="review">Review</option>
								<option value="done">Done</option>
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Description</FormLabel>
							<Textarea
								placeholder="Task description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</FormControl>
					</Flex>
				</ModalBody>

				<ModalFooter gap={3}>
					<Button onClick={handleClose}>Close</Button>
					<Button colorScheme="purple">Confirm</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default TaskModal
