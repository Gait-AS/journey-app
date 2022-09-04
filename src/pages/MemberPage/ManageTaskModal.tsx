import { CheckIcon, DeleteIcon } from "@chakra-ui/icons"
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
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
import { TaskStatus, useContext } from "../../Contexts/GlobalContext"

interface TaskModalProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onOpen, onClose }) => {
	const { state, commands } = useContext()
	const { tasks, taskId } = state
	const { updateTask, deleteTask } = commands

	const selectedTask = tasks.find((task) => task.id === taskId)

	const [name, setName] = useState(selectedTask?.name)
	const [taskStatus, setStatus] = useState(selectedTask?.status)
	const [description, setContent] = useState(selectedTask?.content)

	useEffect(() => {
		const selectedTask = tasks.find((task) => task.id === taskId)

		setName(selectedTask?.name)
		setStatus(selectedTask?.status)
		setContent(selectedTask?.content)
	}, [taskId])

	const handleDelete = () => {
		deleteTask(taskId)
		onClose()
	}

	const handleClose = () => {
		onClose()
	}

	const handleConfirm = () => {
		if (!taskId) {
			throw new Error("taskId cannot be undefined")
		}
		if (!name) {
			throw new Error("name cannot be undefined")
		}
		if (!taskStatus) {
			throw new Error("status cannot be undefined")
		}
		if (!description) {
			throw new Error("description cannot be undefined")
		}
		updateTask(taskId, name, taskStatus, description)
		onClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}
		>
			<ModalOverlay />
			<ModalContent p={5}>
				<ModalHeader>
					<Heading color="purple.900">Manage task</Heading>
				</ModalHeader>

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
							<FormLabel>Status</FormLabel>
							<Select
								placeholder="Select status"
								value={taskStatus}
								onChange={(e) =>
									setStatus(e.target.value as TaskStatus)
								}
							>
								<option value="todo">To do</option>
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
								onChange={(e) => setContent(e.target.value)}
							/>
						</FormControl>
					</Flex>
				</ModalBody>

				<ModalFooter gap={3}>
					<Button
						colorScheme="red"
						onClick={handleDelete}
						leftIcon={<DeleteIcon />}
					>
						Delete
					</Button>
					<Button
						colorScheme="purple"
						leftIcon={<CheckIcon />}
						onClick={handleConfirm}
					>
						Confirm
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default TaskModal
