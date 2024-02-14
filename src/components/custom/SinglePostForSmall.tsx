import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X } from "lucide-react";
import Comment from "@/components/custom/comment";

interface MyComponentProps {
	iscomment: boolean;
	setIscomment: React.Dispatch<React.SetStateAction<boolean>>;
}

const SinglePostSmall : React.FC<MyComponentProps> = ({ iscomment , setIscomment }) => {
	return (
		<div className=" absolute  z-10 w-[70vw] h-[80vh] bg-background flex max-sm:flex-col max-sm:w-[100%] max-sm:h-[84%] max-sm:pt-4 max-sm:z-20 ">
			<img
				className="w-[50%] h-full object-cover object-center max-sm:w-[100%]"
				src="https://images.unsplash.com/photo-1705917674111-50bfa2607d05?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>

			<div className="w-[50%] p-4 pt-0 relative h-[100%] object-cover object-center bg-background flex flex-col max-sm:w-[100%]  ">
				<div className="w-full  flex items-center justify-between pt-0 my-4 ">
					<p text-lg> @ anshul._12</p>
					<Button
						variant={"outline"}
						onClick={() => setIscomment(!iscomment)}
					>
						<X />{" "}
					</Button>
				</div>
				<div className=" w-[100%] bg-background my-4   p-1 flex gap-2">
					<Input className="p-2 w-[85%]" placeholder="Typing..." />
					<Button>
						<Send />
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
			</div>
		</div>
	);
};

export default SinglePostSmall;
