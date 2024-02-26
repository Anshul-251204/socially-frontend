import SmallPostCard from "@/components/custom/SmallPostCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import NotFount from "./secondary/NotFount";
// import { useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { Settings } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";

const Profile = () => {
	const params = useParams();
	const userName: string | undefined = params.userName;
	// const auth = useSelector((state:any)=> state.auth.user)
	const navigate = useNavigate();
	const [userProfile, setUserProfile] = useState<any>();
	const [posts, setPost] = useState<any>([]);
	const [isFollow, setIsFollow] = useState<boolean>();

	useEffect(() => {
		const fetchProfile = async (userName: string | undefined) => {
			const res = await axios.get(
				"https://socialy-backend-tfmn.onrender.com/api/v1/users/" +
					userName
			);
			console.log(res);
			
			setUserProfile(res.data.data);
			setPost(res.data.data.posts);
			setIsFollow(res.data.data.isfollow);
		};

		fetchProfile(userName);
	}, [isFollow]);

	const followOrUnfollow = async () => {
		await axios.post(
			"https://socialy-backend-tfmn.onrender.com/api/v1/follows/" +
				userProfile?._id
		);
		setIsFollow(!isFollow);
	};

	const sendmessage = () => {
		navigate("/coversation/"+userProfile._id);
		console.log(userProfile._id);
		
	}

	


	return (
		<div className=" w-full h-full text-foreground bg-background pt-14 sm:pt-0 ">
			<div className="w-full max-h-full overflow-y-auto no-scrollbar ">
				<div className=" min-h-[30vh] w-full flex flex-col items-center ">
					<div className="w-full flex justify-center items-center gap-4 max-sm:pt-6 ">
						<img
							className=" h-[60px] w-[60px] rounded-full object-cover object-center sm:h-[15vw] sm:w-[15vw] "
							src={userProfile?.avatar.url}
							alt=""
						/>

						<div className="w-[30%] flex flex-col justify-center gap-4  max-sm:w-[60%]">
							<p className="text-xl max-sm:text-sm">
								{userProfile?.fullName}
							</p>

							<div className="text-lg max-sm:text-sm flex gap-4 justify-between items-center">
								<p>@ {userProfile?.userName}</p>

								<Button onClick={followOrUnfollow}>
									{isFollow ? "UnFollow" : "Follow"}
								</Button>
							</div>

							<div className="text-lg max-sm:text-sm flex gap-4 max-sm:flex flex-col">
								<p className="flex gap-4 items-center">
									{userProfile?.email} <MdEmail />
								</p>

								<Button
									className=" max-sm:hidden "
									onClick={sendmessage}
								>
									Message
								</Button>
							</div>
							<Button
								className="sm:hidden "
								onClick={sendmessage}
							>
								Message
							</Button>

							<div className="flex gap-4 justify-between text-lg">
								<p className="max-sm:text-sm">
									{posts.length} Post
								</p>
								<p className="max-sm:text-sm">
									{userProfile?.follower} Follower
								</p>
								<p className="max-sm:text-sm">
									{userProfile?.following} Following
								</p>
							</div>
						</div>
					</div>

					<p className="w-[70%] text-xl my-8 max-sm:text-sm max-sm:w-full">
						{userProfile?.bio}
					</p>
				</div>
				{posts?.length == 0 ? (
					<NotFount title="NO Posts" />
				) : (
					<div className=" border-t pt-4 min-h-[50vh] w-full flex flex-wrap ">
						
						{posts.map((post: any, idx: number) => (
							<SmallPostCard
								post={post}
								key={idx}
								userName={userProfile?.userName}
							/>
						))}
						
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
