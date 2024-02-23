import React from "react";
import { Link } from "react-router-dom";

interface commentProps {
	avatarSrc: string;
	content: string;
	userName: string;
}
const comment :React.FC<commentProps> = ({avatarSrc,content, userName}) => {
	return (
		<div className="w-[110%] flex items-center border-b ">
			<img
				className="w-[50px] h-[50px] rounded-[50%] object-cover"
				src={avatarSrc}
				alt=""
			/>
			<div className="p-3">
				
				<Link to={`/profile/${userName}`}>@ {userName}</Link>
                <p className=" text-sm mt-1 ">{content}</p>
			</div>
		</div>
	);
};

export default comment;
