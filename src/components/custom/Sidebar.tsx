import {
	Heart,
	Home,
	LogIn,
	LogInIcon,
	MessageCircle,
	// LogOut,
	MoreHorizontal,
	PlusSquare,
	Save,
	Search,
	Settings,
} from "lucide-react";
import { MdOutlineExplore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "../mode-toggle";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "@/redux/userSlice";
// import { SiGnuprivacyguard } from "react-icons/si";
const Sidebar: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const auth = useSelector((state: any) => state.auth.user);

	

	const linkOptions = [
		{
			path: "",
			text: "Home",
			icon: <Home />,
		},
		{
			path: "search",
			text: "Search",
			icon: <Search />,
		},
		{
			path: "explore",
			text: "Explore",
			icon: <MdOutlineExplore />,
		},
		{
			path: "conversation",
			text: "Message",
			icon: <MessageCircle />,
		},
		{
			path: "create",
			text: "Create",
			icon: <PlusSquare />,
		},
	];

	async function logoutHandler() {
		await axios.post(
			"https://socialy-backend-2.onrender.com/api/v1/users/logout",
			{},
			{ withCredentials: true }
		);
		dispatch(logout());
		navigate("/");
		window.location.reload();

	}

	return (
		<div className="w-[20%] h-full flex flex-col items-center justify-between pb-8 border-r max-sm:hidden">
			<div>
				<h1 className="pt-8 text-4xl text-primary  ">Socialy</h1>
				{linkOptions.map((link, idx) => (
					<Link to={link.path} key={idx}>
						<div
							key={link.path}
							className="flex items-center gap-4 pt-8  text-xl"
						>
							{link.icon} {link.text}
						</div>
					</Link>
				))}

				{auth ? (
					<Link to={`/profile/${auth.userName}`}>
						<div className="flex items-center gap-4 pt-8  text-xl">
							<CgProfile size={"1.5rem"} />
							<p>Profile</p>
						</div>
					</Link>
				) : null}
				<div className=" gap-4 pt-8 ">
					<ModeToggle />
				</div>
			</div>
			<div>
				<div className="bg-background text-foreground">
					<DropdownMenu>
						<DropdownMenuTrigger>
							<div className="flex gap-4 text-xl font-normal">
								<MoreHorizontal />
								More
							</div>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>
								<Link to={"save"} className="flex gap-4 w-full">
									<Save />
									Save
								</Link>
							</DropdownMenuItem>
							{/* <DropdownMenuItem>
								<Link
									to={"/login"}
									className="flex gap-4 w-full "
								>
									<Heart />
									Your Comments
								</Link>
							</DropdownMenuItem> */}
							<DropdownMenuItem>
								<Link
									to={"/likedpost"}
									className="flex gap-4 w-full "
								>
									<Heart />
									Your liked
								</Link>
							</DropdownMenuItem>
							{!auth ? (
								<DropdownMenuItem>
									<Link
										to={"/login"}
										className="flex gap-4 w-full "
									>
										<LogIn />
										Login
									</Link>
								</DropdownMenuItem>
							) : (
								<DropdownMenuItem
								onClick={logoutHandler} 
								className="flex gap-4 w-full ">
									
										<LogIn />
										logout
								</DropdownMenuItem>
							)}
						</DropdownMenuContent>
					</DropdownMenu>
					<Link to={!auth ? "/SignUp" : "/setting"}>
						<div className="flex items-center mt-8 gap-4 text-xl">
							{!auth ? <LogInIcon /> : <Settings />}
							{!auth ? "SignUP" : "Setting"}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
