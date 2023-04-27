import * as React from "react"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route, redirect, useNavigate } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/SignupPage"
import PageNotFound from "./components/PageNotFound"
import Following from "./components/Following"
import Profile from "./components/Profile"
import ProfileEdit from "./components/ProfileEdit"
import Feed from "./components/Feed"
import Answer from "./components/Answer"
import Events from "./components/Events"
import Topic from "./components/Topic"
import AnswerPage from "./components/AnswerPage"
import EventPage from "./components/EventPage"
import { useDispatch, useSelector } from "react-redux"
import { loadUser } from "./store/userSlice"

function App() {
	const { isAuthenticated } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(loadUser());
	}, [dispatch])
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={isAuthenticated ? <Home /> : <Login />}>
					<Route exact path="/" element={<Feed />} />
					<Route exact path="/following" element={<Following />} />
					<Route exact path="/answer" element={<Answer />} />
					<Route exact path="/events" element={<Events />} />
					<Route exact path="/topic/:id" element={<Topic />} />
				</Route>
				<Route exact path="/question" element={<AnswerPage />} />
				<Route exact path="/oneevent" element={<EventPage />} />
				<Route exact path="/question/:id" element={<AnswerPage />} />
				{/* <Route exact path="/login" element={<Login />} /> */}
				<Route exact path="/signup" element={<Signup />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route exact path="/profile/edit" element={<ProfileEdit />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
