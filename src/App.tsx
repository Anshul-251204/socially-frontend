import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/custom/Sidebar";
import { Home, LogInIcon, Search, Settings } from "lucide-react";
import { MdOutlineExplore } from "react-icons/md";
import Header from "./components/custom/Header";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const App = () => {
	const auth = useSelector((state: any) => state.auth.user);

	const linkOptions = auth
		? [
				{
					path: "",
					icon: <Home />,
				},
				{
					path: "search",
					icon: <Search />,
				},
				{
					path: "explore",
					icon: <MdOutlineExplore size={"1.5rem"} />,
				},
				{
					path: "profile/" + auth?.userName,
					icon: <CgProfile size={"1.45rem"} />,
				},
				{
					path: "setting",
					icon: <Settings />,
				},
		  ]
		: [
				{
					path: "",
					icon: <Home />,
				},
				{
					path: "search",
					icon: <Search />,
				},
				{
					path: "explore",
					icon: <MdOutlineExplore size={"1.5rem"} />,
				},
				{
					path: "login",
					icon: <LogInIcon/>
				}
		  ];

	return (
		<div>
			<div className=" relative box-border text-foreground bg-background w-full h-screen flex max-sm:h-[92vh] ">
				<Sidebar />
				<div className="w-[80%] h-screen p-10  max-sm:p-4 max-sm:w-full ">
					<Header />
					<Outlet />
				</div>
			</div>

			<div className="fixed -bottom-1 p-0 left-0 box-border z-10 w-full h-[8vh] text-foreground bg-background flex justify-evenly items-center border-t  sm:hidden">
				{linkOptions.map((i) => {
					return (
						<Link to={i.path} key={i.path}>
							{i.icon}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default App;
