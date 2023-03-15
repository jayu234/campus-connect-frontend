import * as React from "react"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import PageNotFound from "./components/PageNotFound"
import Following from "./components/Following"
import Profile from "./components/Profile"
import Feed from "./components/Feed"
import Answer from "./components/Answer"
import Events from "./components/Events"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />}>
					<Route exact path="/" element={<Feed />} />
					<Route exact path="/following" element={<Following />} />
					<Route exact path="/answer" element={<Answer />} />
					<Route exact path="/events" element={<Events />} />
				</Route>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
