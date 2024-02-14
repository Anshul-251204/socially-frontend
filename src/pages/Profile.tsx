import MoreOption from "@/components/custom/MoreOption";
import SmallPostCard from "@/components/custom/SmallPostCard";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
	const auth = true;

	return (
		
		<div className="  box-borderbox-border text-foreground bg-background w-full h-full flex flex-col px-10 items-center max-sm:h-[92vh] max-sm:p-0 max-sm:pt-10 ">
			<div className="max-h-full no-scrollbar overflow-auto max-sm:w-full ">
				<div className="flex justify-center items-center py-4 gap-4 h-[40%] w-full border-b-foreground border-b max-sm:hidden ">
					<img
						className=" h-[15vw] w-[15vw] object-cover object-center rounded-[50%] "
						src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
						alt=""
					/>
					<div className=" w-[40%] h-[100%] flex flex-col justify-center gap-4 p-4   ">
						<div className=" w-[100%] flex items-center gap-4 text-xl font-medium ">
							<p>@ anshul._12</p>
							<MoreOption />
							<Button size={"lg"}>follow </Button>
						</div>
						<div className=" w-[100%] flex justify-between text-lg">
							<div className="flex gap-2">
								<p>4</p>
								<p>Post</p>
							</div>
							<div className="flex gap-2">
								<p>30</p>
								<p>Follower</p>
							</div>
							<div className="flex gap-2">
								<p>34</p>
								<p>Following</p>
							</div>
						</div>
						<div className=" w-[100%]">
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Sapiente nobis reiciendis quis
								sed.?{" "}
							</p>
						</div>
					</div>
				</div>

				<div className="w-full h-[30%] flex flex-col my-8 pb-4 border-b-2 sm:hidden">
					<div className="flex w-full gap-8">
						<img
							className=" min-w-[20vw] h-[20vw] rounded-[50%] object-cover  "
							src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
							alt=""
						/>
						<div className=" flex items-center justify-evenly w-[80%] ">
							<p>@ anshul._12</p>
							<Button size={"lg"}>follow </Button>
						</div>
						
					</div>

					<div className="   ">
						<div className="flex justify-between my-4 ">
							<div className="flex gap-2">
								<p>4</p>
								<p>Post</p>
							</div>
							<div className="flex gap-2">
								<p>30</p>
								<p>Follower</p>
							</div>
							<div className="flex gap-2">
								<p>34</p>
								<p>Following</p>
							</div>
						</div>
						<div className=" w-[100%]">
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Sapiente nobis reiciendis quis
								sed.?{" "}
							</p>
						</div>
					</div>
				</div>

				<div className=" h-[60%] w-full flex flex-wrap max-sm:h-[50%] ">
					<SmallPostCard />
					<SmallPostCard />
					<SmallPostCard />
					<SmallPostCard />
					<SmallPostCard />
					<SmallPostCard />
					<SmallPostCard />
				</div>
			</div>
		</div>
	);
};

export default Profile;
