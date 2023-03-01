import * as React from "react"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Following from "./components/Following";
import Feed from "./components/Feed";
import Answer from "./components/Answer";
import Events from "./components/Events";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} >
					<Route path="/" element={<Feed/>} />
					<Route path="/following" element={<Following />} />
					<Route path="/answer" element={<Answer/>}/>
					<Route path="/events" element={<Events/>}/>
				</Route>
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
