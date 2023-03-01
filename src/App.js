import Header from "./components/Header"
import Home from "./components/Home"
// import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"

function App() {
	return (
		<div>
			{/* <MuiThemeProvider theme={THEME}> */}
				<Header />
				<Home />
			{/* </MuiThemeProvider> */}
		</div>
	)
}

// const THEME = createMuiTheme({
// 	typography: {
// 		fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
// 		fontSize: 14,
// 		fontWeightLight: 300,
// 		fontWeightRegular: 400,
// 		fontWeightMedium: 500,
// 	},
// })

export default App
