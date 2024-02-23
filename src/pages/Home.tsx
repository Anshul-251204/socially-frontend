import AllStroy from "@/components/custom/AllStroy";
import PostCard from "@/components/custom/PostCard";
import axios from "axios";
// import test from "node:test";n
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const Home = () => {
	// const navigate = useNavigate();
	const [posts, setPosts] = useState<any>([]);

	
	useEffect(() => {


		async function fetchPost() {
			// const test = await axios.get("/")
			// console.log(test);
			
			try {
				const response = await axios.get("/api/v1/posts/");

				setPosts(response.data.data);

				// navigate("/");
			} catch (error: any) {
				console.log(error);
				
				toast.error("Internal Server error please try after some time 🥲⏳");
			}

			toast;
		}

		fetchPost();
	}, []);
	return (
		<div className="box-border text-foreground bg-background w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-14">

			<div className="w-[40%] max-h-full no-scrollbar overflow-auto max-sm:w-full ">
				<AllStroy/>
				{posts.map((post: any, idx: number) => (
					<PostCard
						key={idx}
						id={post?._id}
						avatarSrc={post?.avatar?.url}
						imgSrc={post?.post?.url}
						userName={post.userName}
						caption={post.caption}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
