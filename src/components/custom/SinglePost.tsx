import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X } from "lucide-react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import Comment from "@/components/custom/comment";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface SinglePostProps {
	iscomment: boolean;
	setIscomment: Function;
	id: number;
	imgSrc: string;
	userName: string;
	caption?: string;
}

const SignlePost: React.FC<SinglePostProps> = ({
	iscomment,
	setIscomment,
	id,
	caption,
	imgSrc,
	userName,
}) => {
	const [isliked, setIsLiked] = useState<boolean>(false);
	const [content, setContent] = useState<string>("");
	const [comments, setComments] = useState([]);
	const [refresh, setRefresht] = useState(false);
	
	useEffect(() => {
		async function fetchComments() {
			try {
				const response = await axios.get(
					"/api/v1/comments/" +
						id
				);

				setComments(response.data.data);
			} catch (error: any) {
				toast.error(error.response.data.message);
			}
		}

		fetchComments();
	}, [refresh]);

	const addComment = async (id: number) => {
	try {
			const res = await axios.post(
				`/api/v1/comments/${id}`,
				{ content }
			);
			setRefresht(!refresh);
			toast.success(res.data.message)
			setContent("")
	} catch (error: any) {
		toast.success(error.response.data.message == "invalid signature" ? "Login First 🥲" : error.response.data.message);
		
	}
	};

	return (
		<div className=" absolute  z-10 w-[70vw] h-[80vh] bg-background flex max-sm:flex-col max-sm:w-[100%] max-sm:h-[84%] max-sm:pt-4 max-sm:z-20 ">
			<img
				className="w-[50%] h-full object-cover object-center max-sm:hidden"
				src={imgSrc}
				alt=""
			/>

			<div className="w-[50%] p-4 pt-0 relative h-full object-cover object-center flex flex-col max-sm:w-[100%]  ">
				<div className="w-full  flex items-center justify-between pt-0 ">
					<p className="text-lg"> @ {userName}</p>
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

					<Button
						variant={"outline"}
						onClick={() => setIscomment(!iscomment)}
					>
						<X />{" "}
					</Button>
				</div>
				<p className="my-4 max-h-20 overflow-auto no-scrollbar leading-tight border-r-4">
					{caption}
				</p>

				<div className="  max-h-[70%] max-w-[90%] overflow-y-auto no-scrollbar ">
					{comments.map((comment: any, idx: number) => (
						<Comment
							key={idx}
							avatarSrc={comment.avatar.url}
							content={comment.content}
							userName={comment.userName}
						/>
					))}
				</div>

				<div className="bottom-0 left-0 absolute w-[100%] bg-background   p-1 flex gap-2">
					<Input
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="p-2 w-[85%]"
						placeholder="Typing..."
					/>
					<Button onClick={() => addComment(id)}>
						<Send />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SignlePost;
