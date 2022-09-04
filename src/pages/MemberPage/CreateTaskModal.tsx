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
	Textarea,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useContext } from "../../Contexts/GlobalContext"

interface TaskModalProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const CreateTaskModal: React.FC<TaskModalProps> = ({
	isOpen,
	onOpen,
	onClose,
}) => {
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

	const handleClose = () => {
		onClose()
	}

	const handleConfirm = () => {
		// if (!taskId) {
		// 	throw new Error("taskId cannot be undefined")
		// }
		// if (!name) {
		// 	throw new Error("name cannot be undefined")
		// }
		// if (!taskStatus) {
		// 	throw new Error("status cannot be undefined")
		// }
		// if (!description) {
		// 	throw new Error("description cannot be undefined")
		// }
		// updateTask(taskId, name, taskStatus, description)
		// onClose()
	}

	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}
		>
			<ModalOverlay />
			<ModalContent p={5}>
				<ModalHeader>
					<Heading color="purple.900">Create task</Heading>
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
					<Button onClick={handleClose}>Cancel</Button>
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

export default CreateTaskModal
