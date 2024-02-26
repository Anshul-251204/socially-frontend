import {  useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdDataSaverOn } from "react-icons/md";
import { Button } from "../ui/button";
import SignlePost from "./SinglePost";
import { Link } from "react-router-dom";
import axios from "axios";

interface postCardProps {
	imgSrc: string;
	avatarSrc: string;
	caption: string;
	userName: string;
	id: number;
}
const PostCard: React.FC<postCardProps> = ({
	imgSrc,
	avatarSrc,
	caption,
	userName,
	id,
}) => {
	const [isliked, setIsLiked] = useState(true);
	const [iscomment, setIscomment] = useState(false);
	const closeRef = useRef<HTMLDivElement>(null);
	const closeModal = (e: any) => {
		if (closeRef.current === e.target) setIscomment(!iscomment);
	};

	// useEffect(()=>{
	// 	const islikedcheck = async ( ) => {
	// 		const res = await axios.get("/api/v1/likes/"+id)
	// 		// console.log(res);
	// 		if(res.data.success){
	// 			setIsLiked(false)
	// 		}
			
	// 	}

	// 	// islikedcheck()
	// },[])

	const doLike = async () => {
		 await axios.post(
				"https://socialy-backend-tfmn.onrender.com/api/v1/likes/" + id
			);
		setIsLiked(!isliked)
		 
		
	}

	return (
		<div className=" mb-8 pt-2 min-h-[90vh] max-sm:min-h-[70vh] ">
			{iscomment && (
				<>
					<div
						ref={closeRef}
						onClick={closeModal}
						className="fixed z-100  w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center  "
					>
						<SignlePost
							id={id}
							iscomment={iscomment}
							setIscomment={setIscomment}
							caption={caption}
							imgSrc={imgSrc}
							userName={userName}
							
						/>
					</div>
				</>
			)}
			<div className="h-[10%] mb-4   pl-4  w-full border-b-foreground">
				<Link to={`profile/${userName}`} className="flex gap-4 items-center">
					<img
						className="w-[50px] h-[50px] rounded-[50%] object-cover object-center"
						src={avatarSrc}
						alt=""
					/>
					<p className=" text-foreground "> @ {userName}</p>
				</Link>
			</div>

			<img
				className="w-full h-[70vh] object-cover object-center rounded-md max-sm:h-[50vh]"
				src={imgSrc}
			/>

			<div className="w-full p-4 flex justify-between">
				<div className=" flex gap-4">
					<button
					 onClick={() => doLike()}>
						{isliked ? (
							<FaRegHeart size={"1.5rem"} />
						) : (
							<FcLike size={"1.5rem"} />
						)}
					</button>

					<button onClick={() => setIscomment(!iscomment)}>
						<FaRegComment size={"1.5rem"} />
					</button>
				</div>

				<Button variant={"ghost"}>
					<MdDataSaverOn size={"1.5rem"} />
				</Button>
			</div>
			<p>{caption}</p>
		</div>
	);
};

export default PostCard;
