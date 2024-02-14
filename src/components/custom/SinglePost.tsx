import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X } from "lucide-react";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import Comment from "@/components/custom/comment";
import React, { useState } from "react";

const SignlePost: React.FC = ({ iscomment, setIscomment }) => {
	const [isliked, setIsLiked] = useState<boolean>(false);

	return (
		<div className=" absolute  z-10 w-[70vw] h-[80vh] bg-background flex max-sm:flex-col max-sm:w-[100%] max-sm:h-[84%] max-sm:pt-4 max-sm:z-20 ">
			<img
				className="w-[50%] h-full object-cover object-center max-sm:hidden"
				src="https://images.unsplash.com/photo-1705917674111-50bfa2607d05?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>

			<div className="w-[50%] p-4 pt-0 relative h-full object-cover object-center flex flex-col max-sm:w-[100%]  ">
				<div className="w-full  flex items-center justify-between pt-0 ">
					<p text-lg> @ anshul._12</p>
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
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Voluptatibus doloribus assumenda sed facere doloremque
					odit!assumenda sed facere doloremque odit! sed facere
					doloremque odit! sed facere doloremque odit! sed facere
					doloremque odit!
				</p>

				<div className="  max-h-[70%] w-full overflow-auto no-scrollbar ">
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</div>

				<div className="bottom-0 left-0 absolute w-[100%] bg-background   p-1 flex gap-2">
					<Input className="p-2 w-[85%]" placeholder="Typing..." />
					<Button>
						<Send />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SignlePost;
