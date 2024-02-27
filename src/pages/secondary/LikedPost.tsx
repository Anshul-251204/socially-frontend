import SmallPostCard from "@/components/custom/SmallPostCard";
import axios from "axios";
import { useEffect, useState } from "react";

const LikedPost = () => {
	const [likedPost, setLikedPost] = useState<any>([]);
	useEffect(() => {
		const fetchLikedPost = async () => {
			const res = await axios.get(
				"https://socialy-backend-tfmn.onrender.com/api/v1/likes",
				{ withCredentials: true }
			);
			setLikedPost(res.data.data);
		};

        fetchLikedPost()
	}, []);


    
	return (
		<div className="box-border text-foreground bg-background w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-14">
			<div className=" border-t pt-4 min-h-full w-full flex flex-wrap ">
				{likedPost.map((post: any, idx: number) => (
					<SmallPostCard
						post={post.post}
						key={idx}
						 userName={post?.userName}
					/>
				))}
			</div>
		</div>
	);
};

export default LikedPost;
