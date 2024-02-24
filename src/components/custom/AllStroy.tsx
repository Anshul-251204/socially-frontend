import { useEffect, useState } from "react";
import Story from "./Story";
import axios from "axios";
import AddStory from "./AddStory";
import { useSelector } from "react-redux";

const AllStroy = () => {
	const [stories, SetStories] = useState<any>([]);
	const auth = useSelector((state: any) => state.auth.user);
	useEffect(() => {
		const fetchStory = async () => {
			const res = await axios.get(
				"https://socialy-backend-2.onrender.com/api/v1/stories/"
			);
			SetStories(res.data.data);
		};

		fetchStory();
	}, []);

	return (
		auth && (
			<div className=" w-full px-2 h-[6rem] sm:h-[8rem] ">
				<div className="w-full h-full flex gap-4 items-center justify-start overflow-x-auto no-scrollbar">
					<AddStory />
					{stories.map((story: any, idx: number) => (
						<Story key={idx} story={story} />
					))}
				</div>
			</div>
		)
	);
};

export default AllStroy;
