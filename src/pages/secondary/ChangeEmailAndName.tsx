import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ChangeEmailAndName: React.FC = () => {
	const [email, setEmail] = useState("");
	const [fullName, setFullName] = useState("");
	const navigate = useNavigate();

	async function changeEmailAndName(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			const response = await axios.patch(
				"/api/v1/users/update",
				{ email, fullName },
				{ withCredentials: true }
			);

			console.log(response);

			toast.success(response.data.message);
		} catch (error: any) {
			console.log(error);

			toast.error(error.response.data.message);
		}

		navigate("/")
	}

	return (
		<div className="w-full h-full flex justify-center  max-sm:items-start pt-40 ">
			<form
				onSubmit={(e) => changeEmailAndName(e)}
				className="w-[50%]  max-sm:w-full"
			>
				<Label className="text-xl" htmlFor="email">
					Email
				</Label>
				<Input
					className="text-lg p-2 my-4 "
					id="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>

				<Label className="text-xl  " htmlFor="fullname">
					Full Name
				</Label>
				<Input
					className="text-lg p-2 my-4"
					id="fullname"
					name="fullName"
					placeholder="Full Name"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
				/>

				<Button className="w-full my-4 text-xl ">Save</Button>
			</form>
		</div>
	);
};

export default ChangeEmailAndName;
