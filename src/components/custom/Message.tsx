import React from "react";

const Message = ({ user,message }: { user: boolean, message:string }) => {
	return (
		<div
			className={`w-fit py-4 px-2 flex  items-center ${
				user
					? "self-end rounded-l-xl flex-row-reverse "
					: " rounded-r-xl self-start"
			} gap-4 text-foreground bg-background ${
				user ? "pt-auto" : "pr-auto"
			} `}
		>
			<p className="w-[50] ">{message?.message}</p>
		</div>
	);
};

export default Message;
