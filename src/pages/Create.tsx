import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
// import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const navigate = useNavigate();

	async function createpost(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		console.log(formData);
		
		try {
			const upload = async () => {

				const res = await axios.post(
					"/api/v1/posts/",
					formData,
					{ withCredentials: true }
				);
				
				return res;
			};
			const myPromise = upload()
			
			console.log(myPromise);
			
			toast.promise(myPromise, {
				loading: "Loading",
				success: "User post is Upload successfull",
				error: "Error when fetching",
			});

			navigate("/");
			// window.location.reload()
		} catch (error: any) {
			toast.error(error.response.data.message);
		}
	}

	return (
		<div className="w-full h-full bg-background text-foreground flex justify-center max-sm:pt-16 ">
			<form
				onSubmit={createpost}
				className="w-[50%] flex flex-col gap-4 py-10  max-sm:w-[80%]"
			>
				<Input
					type="file"
					placeholder="Posts"
					name="post"
					className="text-foreground relative p-2 after:h-full after:w-full after:absolute after:bg-foreground after:left-0 after:top-0 after:content-['Choose_file'] after:text-background after:text-xl after:p-1"
				/>
				{/* <Input
					type="text"
					placeholder="Posts"
					className="text-foreground relative p-2 after:h-full after:w-full after:absolute after:bg-foreground after:left-0 after:top-0 after:content-['Choose_file'] after:text-background after:text-xl after:p-1"
				/> */}
				<Textarea
					name="caption"
					placeholder="caption of Post...."
					// value={result}
					className="text-xl"
				/>

				<Button type="submit" variant={"default"}>
					Post
				</Button>
			</form>
		</div>
	);
};

export default Create;
