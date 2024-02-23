import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
import { Heart, LogIn, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/userSlice";
const MoreOption = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	async function logoutHandler() {
		await axios.post("/api/v1/users/logout", {}, { withCredentials: true });
		dispatch(logout());
		navigate("/");
		window.location.reload();
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="rounded-none p-3 text-lg flex gap-4 items-center h-fit w-fit hover:text-primary">
					{/* <MoreHorizontal /> */}
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
				<DropdownMenuItem>
					<Link to={"/login"} className="flex gap-4 w-full ">
						<Heart />
						Your Comments
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to={"/likedpost"} className="flex gap-4 w-full ">
						<Heart />
						Your liked
					</Link>
				</DropdownMenuItem>

				<DropdownMenuItem>
					<Link to={"/login"} className="flex gap-4 w-full ">
						<LogIn />
						Login
					</Link>
				</DropdownMenuItem>

				<DropdownMenuItem
					onClick={logoutHandler}
					className="flex gap-4 w-full "
				>
					<LogIn />
					logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MoreOption;
