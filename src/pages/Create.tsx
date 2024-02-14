import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const Create = () => {
	
	
	

	return (
		<div className="w-full h-full bg-background text-foreground flex justify-center max-sm:pt-16 ">
			<div className="w-[50%] flex flex-col gap-4 py-10  max-sm:w-[80%]">
				<Input
					type="file"
					placeholder="Posts"
					className="text-foreground relative p-2 after:h-full after:w-full after:absolute after:bg-foreground after:left-0 after:top-0 after:content-['Choose_file'] after:text-background after:text-xl after:p-1"
				/>
				<Input
					type="text"
					placeholder="Posts"
					
					className="text-foreground relative p-2 after:h-full after:w-full after:absolute after:bg-foreground after:left-0 after:top-0 after:content-['Choose_file'] after:text-background after:text-xl after:p-1"
				/>
				<Textarea
					placeholder="caption of Post...."
					// value={result}
					className="text-xl"
				/>

				<Button
					variant={"default"}
				>
					Post
				</Button>
			</div>
		</div>
	);
};

export default Create;
