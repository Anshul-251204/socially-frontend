import axios from "axios";
import { Button } from "../ui/button";

const SingleDeletePost = ({post}:{post:any}) => {
	
	const deletePost = async () => {
		await axios.delete(
			"https://socialy-backend-2.onrender.com/api/v1/posts/" + post._id
		);
	};
  return (
		<div className="w-full flex flex-col gap-4">
			<img
				className="w-[100%] max-h-[50vh] object-cover"
				src={post.avatar.url}
				alt="image"
			/>

			<p>{post?.caption}</p>

			<Button onClick={deletePost}>Delete </Button>
		</div>
  );
}

export default SingleDeletePost