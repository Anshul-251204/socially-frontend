import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<div className="h-screen w-full text-foreground bg-background flex justify-center">
			<div className="w-[40%] h-full max-sm:w-[90%] flex flex-col justify-center gap-4">
				<h1 className="text-4xl font-semibold text-center mb-4">
					Register{" "}
				</h1>
				<Input
					className="p-2 text-lg"
					type="text"
					placeholder="Full Name"
				/>
				<Input
					className="p-2 text-lg"
					type="text"
					placeholder="User Name"
				/>
				<Input
					className="p-2 text-lg"
					type="email"
					placeholder="Email@.gmail.com"
				/>
				<Input
					className="p-2 text-lg"
					type="password"
					placeholder="Password"
				/>

				<p>Profile Picture *</p>
				<Input
					className="p-2 text-lg text-foreground"
					type="file"
					placeholder="Avatar"
				/>
				<Button>Sign</Button>
				<Link to={"/login"} className="w-full">
					<Button variant={"secondary"} className="w-full">Login</Button>
				</Link>
			</div>
		</div>
	);
};

export default Signup;
