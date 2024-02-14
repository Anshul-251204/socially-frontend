import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const ChangeEmailAndName : React.FC = () => {
  return (
		<div className="w-full h-full flex justify-center  max-sm:items-start pt-40 ">
			<form 
            className="w-[50%]  max-sm:w-full">
				<Label className="text-xl" htmlFor="email">
					Email
				</Label>
				<Input
					className="text-lg p-2 my-4 "
					id="email"
					placeholder="Email"
				/>

				<Label className="text-xl  " htmlFor="fullname">
					Full Name
				</Label>
				<Input
					className="text-lg p-2 my-4"
					id="fullname"
					placeholder="Full Name"
				/>

                <Button className="w-full my-4 text-xl ">Save</Button>
			</form>
		</div>
  );
}

export default ChangeEmailAndName