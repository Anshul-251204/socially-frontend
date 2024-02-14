import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

const SearchAccount = () => {
  return (
		<div className="w-[100%] my-1 border rounded-md flex items-center gap-4 p-4 sm:w-[60%] ">
			 
			<img 
            className="w-[50px] h-[50px] rounded-[50%]"
            src="https://github.com/shadcn.png" alt="" />
			<p>@ anshul._12</p>
		</div>
  );
}

export default SearchAccount