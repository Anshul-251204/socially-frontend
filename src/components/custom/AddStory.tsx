import { useState } from "react";
import { useSelector } from "react-redux";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const AddStory = () => {
	const auth = useSelector((state: any) => state.auth.user);
	

	return (
		<Link
			to={"/uploadstory"}
			className="max-w-[4rem] min-w-[4rem] relative rounded-full h-[4rem] bg-gradient-to-r from-[rgba(255,1,215,0.8491990546218487)] to-[rgba(137,18,222,1)] via-[rgba(255,0,0,1)] p-1 sm:h-[6rem] sm:min-w-[6rem]"
		>
			<div className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] font-extrabold">
				<Plus size={"3rem"} />
			</div>

			<img
				className="w-full h-full rounded-full object-cover"
				src={auth?.avatar.url}
				alt={auth?.userName}
			/>
		</Link>
	);
};

export default AddStory;
