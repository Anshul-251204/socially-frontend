import SmallPostCard from "@/components/custom/SmallPostCard";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Explore = () => {
	const [posts, setPosts] = useState<any>([]);

	useEffect(() => {
		async function fetchPost() {
			try {
				const response = await axios.get("/api/v1/posts/");

				setPosts(response.data.data);
			} catch (error: any) {
				toast.error(
					"Internal Server error please try after some time 🥲⏳"
				);
			}
		}

		fetchPost();
	}, []);

	return (
		<div className=" box-border text-foreground bg-background w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-16">
			<div className="w-[100%] max-h-full flex flex-wrap no-scrollbar overflow-auto max-sm:w-full ">
				{posts.map((i: any, idx: number) => (
					<SmallPostCard key={idx} post={i} />
				))}
			</div>
		</div>
	);
};

export default Explore;
