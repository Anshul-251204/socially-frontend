import SearchAccount from "@/components/custom/SearchAccount";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import NotFound from "./secondary/NotFount";

const Search: React.FC = () => {
	const [searchUsers, setSearchUsers] = useState([]);
	const [qurey, setQurey] = useState<string>("");

	const search = async () => {
		try {
			if (!qurey) {
				toast("Enter User Name 🥲");
			}
			const res = await axios.get(
				`https://socialy-backend-tfmn.onrender.com/api/v1/users/search?query=${qurey}`
			);
			setSearchUsers(res.data.data);

			if (res.data.data.length == 0) toast("User Not Found🙄");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className=" box-border text-foreground bg-background w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-16 ">
			<div className="w-full flex gap-2 items-center">
				<Input
					placeholder="Search..."
					className="w-[80%] py-2 text-lg"
					onChange={(e) => setQurey(e.target.value)}
				/>
				<Button
					id="btn"
					onClick={search}
					size={"lg"}
					className=" py-2 text-lg"
				>
					Search
				</Button>
			</div>

			{searchUsers.length == 0 ? (
				<NotFound  />
			) : (
				<div className="w-[100%] pt-4 max-h-full flex justify-center flex-wrap no-scrollbar overflow-auto max-sm:w-full sm:justify-start ">
					{searchUsers.map((user: any, idx: number) => (
						<SearchAccount
							key={idx}
							avatarSrc={user.avatar.url}
							userName={user.userName}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
