import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

type ViewStoryProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	story: any;
};
const ViewStory: React.FC<ViewStoryProps> = ({ isOpen, setIsOpen, story }) => {
	return (
		<div className=" bg-slate-600 absolute h-[100%] w-[100%] sm:w-[30%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
			<div className="w-full h-full relative">
				<div className="">
					<Link
						className=" absolute flex items-center gap-4 top-6 left-0 text-xl mt-2 ml-2 "
						to={`/profile/${story.userName}`}
					>
						<img
							className=" w-[50px] h-[50px] rounded-full object-cover"
							src={story?.avatar}
							alt=""
						/>
						@ {story.userName}
					</Link>

					<div
						
						className=" absolute mr-4 mt-4 top-6 right-0"
						onClick={() => setIsOpen(!isOpen)}
					>
						<CgClose size={"2rem"} /> 
					</div>
				</div>
				<img
					className="w-full h-full object-cover "
					src={story?.story.url}
					alt="img"
				/>
			</div>
		</div>
	);
};

export default ViewStory;
