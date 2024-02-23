import { MessageCircle, PlusSquare } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
	const auth = useSelector((state:any)=> state.auth.user)

	return (
		<div className="flex justify-evenly gap-4 fixed w-full  items-center border-b  sm:hidden">
			<Link to={"/"} className=" mb-4 text-4xl  text-primary  ">Socialy </Link >

			{auth ? (
				<>
					<Link to={"create"}>
						<PlusSquare />
					</Link>
					<Link to={"/conversation"}>
						<MessageCircle />
					</Link>{" "}
				</>
			) : null}
		</div>
	);
};

export default Header;
