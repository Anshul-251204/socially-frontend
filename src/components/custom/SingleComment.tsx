import { Delete } from "lucide-react";
import { Button } from "../ui/button";

const SingleComment = () => {
	return (
		<div className="w-full flex items-center p-4  gap-4 hover:bg-secondary ">
			<img
				className="w-[60px] h-[60px] rounded-full object-cover"
				src="https://images.unsplash.com/photo-1708115106932-9e4fb96e4725?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
				alt=""
			/>
			<div className="flex  justify-start flex-col ">
				<div className="flex justify-between">
					<h3 className="text-foreground text-2xl py-2">@ anshul</h3>
					<Button 
					className=" hover:text-primary "
					variant="ghost">
						<Delete />
					</Button>
				</div>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Harum quibusdam magnam corporis maxime voluptatem sint nobis
					inventore consequatur similique!
				</p>
			</div>
		</div>
	);
};

export default SingleComment;
