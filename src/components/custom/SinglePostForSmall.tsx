import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Trash, X } from "lucide-react";
import Comment from "@/components/custom/comment";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface SinglePostProps {
	iscomment: boolean;
	setIscomment: Function;
	id: number | string;
	_id: any;
	imgSrc: string;
	userName: string;
	caption?: string;
}

const SinglePostSmall: React.FC<SinglePostProps> = ({
	iscomment,
	setIscomment,
	id,
	_id,
	caption,
	imgSrc,
	userName,
}) => {
	const [refresh, setRefresht] = useState(false);
	const [content, setContent] = useState<string>("");
	const [comments, setComments] = useState([]);
	const auth = useSelector((state: any) => state?.auth.user);

	

	useEffect(() => {
		async function fetchComments() {
			try {
				const response = await axios.get(
					"https://socialy-backend-2.onrender.com/api/v1/comments/" +
						id
				);

				setComments(response.data.data);
			} catch (error: any) {
				toast.error(error.response.data.message);
			}
		}

		fetchComments();
	}, [refresh]);

	const addComment = async (id: number | string) => {
		try {
			const res = await axios.post(
				`https://socialy-backend-2.onrender.com/api/v1/comments/${id}`,
				{ content }
			);
			setRefresht(!refresh);
			toast.success(res.data.message);
			setContent("");
		} catch (error: any) {
			toast.success(
				error.response.data.message == "invalid signature"
					? "Login First 🥲"
					: error.response.data.message
			);
		}
	};

	const deletePost = async (id:any) => {
		await axios.delete(
			"https://socialy-backend-2.onrender.com/api/v1/posts/" + id
		);
		window.location.reload()
	}
	return (
		<div className=" absolute  z-10 w-[70vw] h-[80vh] bg-background flex max-sm:flex-col max-sm:w-[100%] max-sm:h-[84%] max-sm:pt-4 max-sm:z-20 ">
			<img
				className="w-[50%] h-full object-cover object-center max-sm:w-[100%]"
				src={imgSrc}
				alt=""
			/>

			<div className="w-[50%] p-4 pt-0 relative h-[100%] object-cover object-center bg-background flex flex-col max-sm:w-[100%]  ">
				<div className="w-full  flex items-center justify-between pt-0 my-4 ">
					<Link to={`/profile/${userName}`}> @ {userName}</Link>
					{auth?._id == _id ? (
						<Button onClick={()=>deletePost(id)}>
							<Trash />
						</Button>
					) : null}
					<Button
						variant={"outline"}
						onClick={() => setIscomment(!iscomment)}
					>
						<X />{" "}
					</Button>
				</div>
				<div className=" w-[100%] bg-background my-4   p-1 flex gap-2">
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
			</div>
		</div>
	);
};

export default SinglePostSmall;
