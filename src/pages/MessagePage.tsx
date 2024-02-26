import Message from "@/components/custom/Message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MessagePage = () => {
	const params = useParams();
	const [message, setMessage] = useState<string>("");
	const [allMessage, setAllMessage] = useState([]);
	const [realTime, setRealtime] = useState<boolean>(false);
	const auth = useSelector((state: any) => state.auth.user);
	// console.log(params);
	

	useEffect(() => {
		const fetchMessage = async () => {
			const res = await axios.get(
				"https://socialy-backend-tfmn.onrender.com/api/v1/messages/get/" +
					params.userId
			);

			setAllMessage(res.data.data);
		};
		fetchMessage();
	}, [realTime]);

	async function sendMessage() {
		await axios.post(
			"https://socialy-backend-tfmn.onrender.com/api/v1/messages/send/" +
				params.userId,
			{ message }
		);
		setMessage("");
		setRealtime(!realTime);
	}

	
	return (
		<div className="box-border text-foreground  w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-14">
			{/* <div className=" w-full h-[10%] bg-slate-200 "></div> */}
			<div
				className={`w-full  max-h-[90%] min-h-[90%] flex flex-col gap-2 justify-end  overflow-auto no-scrollbar `}
			>
				{allMessage.map((message: any, idx: number) => {
					if (message.senderId == auth._id) {
					
						return ( 
							<Message key={idx} user={true} message={message} />
						);
					}
					return <Message key={idx} user={false} message={message} />;
				})}
			</div>
			<div className="h-[10%] w-full b flex  justify-center items-center gap-4 border-t ">
				<Input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="p-2 h-fit w-[80%]"
					placeholder="Typing..."
				/>
				<Button onClick={sendMessage} size={"lg"}>
					Send
				</Button>
			</div>
		</div>
	);
};

export default MessagePage;
