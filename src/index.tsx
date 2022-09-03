import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { GlobalProvider } from "./Contexts/GlobalContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<GlobalProvider>
					<App />
				</GlobalProvider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
)
