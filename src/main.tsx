import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Explore from "./pages/Explore.tsx";
import Create from "./pages/Create.tsx";
import Search from "./pages/Search.tsx";
import Profile from "./pages/Profile.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Setting from "./pages/Setting.tsx";
import ChangeEmailAndName from "./pages/secondary/ChangeEmailAndName.tsx";
import ChangeProfile from "./pages/secondary/ChangeProfile.tsx";
import Conversation from "./pages/Conversation.tsx";
import MessagePage from "./pages/MessagePage.tsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import LikedPost from "./pages/secondary/LikedPost.tsx";
import AllComment from "./pages/secondary/AllComment.tsx";
import UploadStory from "./pages/secondary/UploadStroy.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "search",
				element: <Search />,
			},
			{
				path: "explore",
				element: <Explore />,
			},
			{
				path: "create",
				element: <Create />,
			},
			{
				path: "profile/:userName",
				element: <Profile />,
			},
			{
				path: "setting",
				element: <Setting />,
			},
			{
				path: "update",
				element: <ChangeEmailAndName />,
			},
			{
				path: "changeavatar",
				element: <ChangeProfile />,
			},
			{
				path: "conversation",
				element: <Conversation />,
			},
			{
				path: "coversation/:userId",
				element: <MessagePage />,
			},
			{
				path: "likedpost",
				element: <LikedPost />,
			},
			{
				path: "comments",
				element: <AllComment />,
			},
			{
				path: "uploadstory",
				element: <UploadStory />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
]);

// const router : browerRoute = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "search",
// 				element: <Search />,
// 			},
// 			{
// 				path: "explore",
// 				element: <Explore />,
// 			},

// 			{
// 				path: "create",
// 				element: <Create />,
// 			},
// 			,
// 			{
// 				path: "profile",
// 				element: <Profile />,
// 			},
// 		],
// 	},
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
			<Toaster />
		</ThemeProvider>
	</Provider>
);
