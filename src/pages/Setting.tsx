import MoreOption from "@/components/custom/MoreOption";
import { Button } from "@/components/ui/button";
import { logout } from "@/redux/userSlice";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Setting: React.FC = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	async function logoutHandler() {
		await axios.post(
			"https://socialy-backend-tfmn.onrender.com/api/v1/users/logout",
			{},
			{ withCredentials: true }
		);
		dispatch(logout());
		navigate("/");
		window.location.reload();
	}
	return (
		<div className="w-full h-[95%] flex justify-start max-sm:pt-16">
			<div className="w-[40%] max-sm:w-[100%] flex flex-col ">
				{/* <h1 className="text-4xl mb-8">Setting</h1> */}
				<Link
					to="/update"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					Change Email and Name
				</Link>
				<Link
					to="/changeAvatar"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					Change Profile
				</Link>

				<Link
					to="/likedpost"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					liked Post
				</Link>
				<Link
					to="/comments"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					All Comments
				</Link>
				<Button
					onClick={logoutHandler}
					variant={"ghost"}
					className="rounded-none p-3 text-lg h-fit w-fit hover:text-primary "
				>
					LogOut
				</Button>

				<MoreOption />
			</div>
		</div>
	);
};

export default Setting;
