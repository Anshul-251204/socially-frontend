import { useState } from "react";
import ViewStory from "./ViewStory";
// import AddStory from "./AddStory";

const Story = ({ story }: { story: any }) => {
	const [isOpen, setIsopen] = useState<boolean>(false);

	return (
		<button
			onClick={() => setIsopen(!isOpen)}
			className="max-w-[4rem] min-w-[4rem] rounded-full h-[4rem] bg-gradient-to-r from-[rgba(255,1,215,0.8491990546218487)] to-[rgba(137,18,222,1)] via-[rgba(255,0,0,1)] p-1 sm:h-[6rem] sm:min-w-[6rem]"
		>
			{isOpen && (
				<ViewStory
					isOpen={isOpen}
					setIsOpen={setIsopen}
					story={story}
				/>
			)}

			<img
				className="w-full h-full rounded-full object-cover"
				src={story?.avatar}
				alt={story?.userName}
			/>
		</button>
	);
};


export default Story;
