import { Button } from '@/components/ui/button';
import React from 'react'
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
		<div className="w-full h-[95%] flex justify-start max-sm:pt-16">
			<div className="w-[40%] max-sm:w-[100%] flex flex-col ">
				{/* <h1 className="text-4xl mb-8">Setting</h1> */}
				<Link
					to="/update"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					Change Email and Name
				</Link>
				<Link
					to="/changeAvatar"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					Change Profile
				</Link>

				<Link
					to="likes"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					liked Post
				</Link>
				<Link
					to="comments"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					All Comments
				</Link>
				<Link
					to="deletepost"
					className="rounded-none p-3 text-lg h-fit w-full hover:text-primary "
				>
					Delete Post
				</Link>
				<Button
					variant={"ghost"}
					className="rounded-none p-3 text-lg h-fit w-fit hover:text-primary "
				>
					LogOut
				</Button>
				<Button
					variant={"ghost"}
					className="rounded-none p-3 text-lg h-fit w-fit hover:text-primary "
				>
					Delete Account
				</Button>
			</div>
		</div>
  );
}

export default Setting