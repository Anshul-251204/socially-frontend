import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";
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
				path: "profile",
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
	<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
		<RouterProvider router={router} />
	</ThemeProvider>
);
