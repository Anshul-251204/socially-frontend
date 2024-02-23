import { Link } from "react-router-dom";

const SingleConversation = ({id,userName,avatar,lastMessage}:{id:string,userName:string, avatar:string ,lastMessage:string}) => {
	
	return (
		<Link to={"/coversation/"+id}>
			<div className="w-full py-4 px-2 flex gap-4 text-foreground bg-background hover:bg-secondary">
				<img
					className="w-[60px] h-[60px] rounded-[50%] object-cover "
					src={avatar}
					alt="avatar"
				/>

				<div>
					<h4 className="">{userName}</h4>
					<p>{lastMessage}</p>
				</div>
			</div>
		</Link>
	);
};

export default SingleConversation;
