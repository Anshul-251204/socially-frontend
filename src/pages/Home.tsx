import PostCard from "@/components/custom/PostCard";

const Home = () => {
	return (
		<div className="box-border text-foreground bg-background w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-14">
			<div className="w-[40%] max-h-full no-scrollbar overflow-auto max-sm:w-full ">
				<PostCard />
				<PostCard />
				<PostCard />
			</div>
		</div>
	);
};

export default Home;
