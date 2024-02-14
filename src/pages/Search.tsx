import SearchAccount from "@/components/custom/SearchAccount";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Search = () => {
	return (
		<div className="   box-border text-foreground bg-background w-full h-full flex flex-col items-center  max-sm:h-[92vh] max-sm:pt-16 ">
			<div className="w-full flex gap-2 items-center">
				<Input
					placeholder="Search..."
					className="w-[80%] py-2 text-lg"
				/>
				<Button size={"lg"} className=" py-2 text-lg">
					Search
				</Button>
			</div>
			<div className="w-[100%] pt-4 max-h-full flex justify-center flex-wrap no-scrollbar overflow-auto max-sm:w-full sm:justify-start ">
				<SearchAccount />
				<SearchAccount />
				<SearchAccount />
				<SearchAccount />
				<SearchAccount />
				<SearchAccount />
				<SearchAccount /> <SearchAccount />
				<SearchAccount />
				<SearchAccount />
			</div>
		</div>
	);
};

export default Search;
