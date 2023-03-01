import * as React from "react"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} errorElement={<PageNotFound/>}/>
				<Route path="/login" element={<Login/>}/>
			</Routes>
		</BrowserRouter>
	)
}
export default App
