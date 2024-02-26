import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UploadStory: React.FC = () => {
	const navigate = useNavigate();
	const [avatar, setAvatar] = useState<any>();

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const form = e.target as HTMLFormElement;

			const formData = new FormData(form);

			const UploadStory = async () => {

				return await axios.post(
					"https://socialy-backend-tfmn.onrender.com/api/v1/stories/",
					formData,
					{ withCredentials: true }
				);

			};
			console.log(UploadStory());
			
			const myPromise =  UploadStory();

			console.log(myPromise);
			

			toast.promise(myPromise, {
				loading: "wait your story is uploading ⏳",
				success: "your Story was Uploaded ✅",
				error: "Something went wrong please wait few minutes and try again !!",
			});
			navigate("/");
		} catch (error:any) {
			console.log(error);
			toast.error(error.response.data.message)
		}
	};

	function handleChange(e: any) {
		setAvatar(URL.createObjectURL(e.target.files[0]));
	}
	return (
		<div className="w-full h-full flex justify-center  max-sm:items-start pt-40 ">
			<form onSubmit={submitHandler} className="w-[50%]  max-sm:w-full">
				<Label className="text-xl" htmlFor="avatar">
					Story Picture
				</Label>
				<Input
					className="text-foreground text-lg p-2 my-4 relative after:h-full after:w-full after:absolute after:bg-foreground after:left-0 after:top-0 after:content-['Choose_file'] after:text-background after:text-xl after:p-1"
					id="avatar"
					name="story"
					onChange={handleChange}
					placeholder="story"
					type="file"
				/>

				<Button className="w-full my-4 text-xl active:bg-muted ">
					Upload Story
				</Button>

				<h1 className="text-xl text-center my-4 font-semibold">
					Preview
				</h1>

				<img
					className="w-[20vh] h-[20vh] rounded-[50%] object-cover mx-auto  "
					src={avatar}
					alt=""
				/>
			</form>
		</div>
	);
};

export default UploadStory;
