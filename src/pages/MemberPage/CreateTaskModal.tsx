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
	const { teamId } = state.user
	const { createTask } = commands

	const [name, setName] = useState("")
	const [content, setContent] = useState("")

	const resetState = () => {
		setName("")
		setContent("")
	}

	const handleClose = () => {
		resetState()
		onClose()
	}

	const handleConfirm = () => {
		if (!teamId) {
			throw new Error("teamId cannot be undefined")
		}
		if (!name) {
			throw new Error("name cannot be undefined")
		}
		if (!content) {
			throw new Error("description cannot be undefined")
		}
		createTask(name, content, teamId)
		resetState()
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
								value={content}
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
