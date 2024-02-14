import { useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdDataSaverOn } from "react-icons/md";
import { Button } from "../ui/button";
import SignlePost from "./SinglePost";
import { Link } from "react-router-dom";
const PostCard = () => {
	const [isliked, setIsLiked] = useState(false);
	const [iscomment, setIscomment] = useState(false);
	const closeRef = useRef();
	const closeModal = (e:any) => {
		if (closeRef.current == e.target) setIscomment(!iscomment);
	};
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
							iscomment={iscomment}
							setIscomment={setIscomment}
						/>
					</div>
				</>
			)}
			<div className="h-[10%] mb-4   pl-4  w-full border-b-foreground">
				<Link to={"profile"} className="flex gap-4 items-center">
					<img
						className="w-[50px] h-[50px] rounded-[50%] object-cover object-center"
						src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
						alt=""
					/>
					<p className=" text-foreground "> @ anshul._13</p>
				</Link>
			</div>

			<img
				className="w-full h-[70vh] object-cover object-center rounded-md max-sm:h-[50vh]"
				src="https://images.unsplash.com/photo-1707490727233-89e2baf0d9d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>

			<div className="w-full p-4 flex justify-between">
				<div className=" flex gap-4">
					<button onClick={() => setIsLiked(!isliked)}>
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
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Possimus sit laborum molestias! Quasi!
			</p>
		</div>
	);
};

export default PostCard;
