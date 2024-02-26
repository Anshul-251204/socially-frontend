import SingleConversation from "@/components/custom/SingleConversation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NotFount from "./secondary/NotFount";

const Conversation: React.FC = () => {
	const [ conversation, setConversation] = useState(["f"])
	console.log(conversation);
	

	useEffect(()=>{
		const fetchconversation = async()=>{
			const res = await axios.get(
				"https://socialy-backend-tfmn.onrender.com/api/v1/conversations/"
			);
			// console.log(res);
			
			setConversation(res.data.data)

		}
		fetchconversation()
	},[])

	if(conversation.length == 0){
		return (
			<div className="box-border text-foreground px-6 w-full h-full flex flex-col items-center justify-center  max-sm:h-[92vh] max-sm:pt-14">
				<NotFount title="Go To Users Profile and send message" />
			</div>
		);
	};
	
	
	return (
		<div className="box-border text-foreground  w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-14">
			<div className="w-full max-h-full overflow-auto no-scrollbar ">
				{conversation.map((i: any, idx: number) => (
					<SingleConversation
					key={idx}
						id={i?.recevier}
						avatar={i?.avatar}
						userName={i?.userName}
						lastMessage={i?.lastMessage}
					/>
				))}
			</div>
		</div>
	);
};

export default Conversation;
