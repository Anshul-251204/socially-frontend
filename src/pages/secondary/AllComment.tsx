import SingleComment from "@/components/custom/SingleComment";
import React from "react";

const AllComment: React.FC = () => {
	return (
		<div className="box-border text-foreground bg-background w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-14">
			<div className="w-full max-h-[95vh] overflow-y-auto no-scrollbar">
				<SingleComment /> <SingleComment /> <SingleComment />{" "}
				<SingleComment /> <SingleComment /> <SingleComment />{" "}
				<SingleComment /> <SingleComment /> <SingleComment />{" "}
				<SingleComment /> <SingleComment /> <SingleComment />{" "}
				<SingleComment /> <SingleComment />
			</div>
		</div>
	);
};

export default AllComment;
