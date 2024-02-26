// import useRegister from "@/Hooks/reigsterHook";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "@/redux/userSlice";
const Signup = () => {
	const [fullName, setFullName] = useState<string>("");
	const [userName, setuserName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const navigate = useNavigate();
	const dispatch = useDispatch()

	async function register(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		try {
			const response = await axios.post(
				"https://socialy-backend-tfmn.onrender.com/api/v1/users",
				formData,
				{ withCredentials: true }
			);

			// console.log(response);
			dispatch(login(response.data.data));
			localStorage.setItem(
				"curr-user",
				JSON.stringify(response.data.data)
			);

			toast.success("Register successfully");
			navigate("/");
		} catch (error: any) {
			toast.error(error.response.data.message);
		}
	}

	return (
		<div className="h-screen w-full text-foreground bg-background flex justify-center">
			<div className="w-[40%] h-full max-sm:w-[90%] flex flex-col justify-center gap-4">
				<h1 className="text-4xl font-semibold text-center mb-4">
					Register{" "}
				</h1>
				<form
					className="flex flex-col gap-4"
					onSubmit={(e) => register(e)}
				>
					<Input
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						className="p-2 text-lg"
						type="text"
						placeholder="Full Name"
						name="fullName"
					/>
					<Input
						value={userName}
						onChange={(e) => setuserName(e.target.value)}
						className="p-2 text-lg"
						type="text"
						placeholder="User Name"
						name="userName"
					/>
					<Input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="p-2 text-lg"
						type="email"
						placeholder="Email@.gmail.com"
						name="email"
					/>
					<Input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="p-2 text-lg"
						type="password"
						placeholder="Password"
						name="password"
					/>

					<p>Profile Picture *</p>

					<Input
						id="avatarfile"
						className="p-2 text-lg text-foreground"
						type="file"
						placeholder="Avatar"
						name="avatar"
					/>
					<Button className="w-full" type="submit">
						Sign Up
					</Button>
				</form>
				<Link to={"/login"} className="w-full">
					<Button variant={"secondary"} className="w-full">
						Login
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Signup;
