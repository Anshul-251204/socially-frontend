import { PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className="flex justify-evenly gap-4 fixed w-full  items-center border-b  sm:hidden">
			<h1 className=" mb-4 text-4xl  text-primary  ">Socialy </h1>

			<Link to={"create"}>
				<PlusSquare />
			</Link>
		</div>
	);
};

export default Header;
