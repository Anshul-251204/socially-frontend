import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Heart, LogOut, MoreHorizontal, Save } from "lucide-react";

const MoreOption = () => {
	return (
		<div>
			{" "}
			<div className="sm:hidden">
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button variant={"ghost"} className="flex rotate-90 gap-4 ">
							<MoreHorizontal />
							
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className=" absolute">
						<DropdownMenuItem>
							<Button variant={"ghost"} className="flex gap-4">
								<Save />
								Save
							</Button>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Button variant={"ghost"} className="flex gap-4">
								<Heart />
								Your liked
							</Button>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Button variant={"ghost"} className="flex gap-4">
								<LogOut />
								Logout
							</Button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default MoreOption;
