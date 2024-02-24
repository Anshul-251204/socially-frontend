import React from "react";
import { Link } from "react-router-dom";

interface SearchAccountProps {
	avatarSrc: string;
	userName: string;
}

const SearchAccount: React.FC<SearchAccountProps> = ({
	avatarSrc,
	userName,
}) => {
	return (
		<Link
			to={"https://socialy-backend-2.onrender.com/profile/" + userName}
			className="w-[100%] my-1 border rounded-md flex items-center gap-4 p-4 sm:w-[60%]"
		>
			{/* <div className="w-[100%] my-1 border rounded-md flex items-center gap-4 p-4 sm:w-[60%] "> */}
			<img
				className="w-[50px] h-[50px] rounded-[50%] object-cover"
				src={avatarSrc}
				alt=""
			/>
			<p>@ {userName}</p>
			{/* </div> */}
		</Link>
	);
};

export default SearchAccount;
