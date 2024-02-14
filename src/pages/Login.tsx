import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [userName, setUserName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const go = useRef<boolean>(true); // for change state of login button

	{if (password.length >= 4) {
		console.log(go.current);

		go.current = true;
	}else{
        go.current = false
    }}

	return (
		<div className="h-screen w-full text-foreground bg-background flex justify-center items-center gap-12">
			<img
				className="w-[30%] h-[80%] object-cover max-sm:hidden "
				src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvY2lhbHl8ZW58MHx8MHx8fDA%3D"
				alt=""
			/>
			<div className="w-[40%] h-full max-sm:w-[90%] flex flex-col justify-center gap-4">
				<h1 className="text-4xl font-semibold text-center mb-4">
					Login  
				</h1>

				<Input
					className="p-2 text-lg"
					type="text"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					placeholder="Username"
				/>
				<Input
					className="p-2 text-lg"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>

				<Button variant={go.current ? "default" : "destructive"}>
					Login
				</Button>
				<Link to={"/signup"} className="w-full">
					<Button variant={"secondary"} className="w-full">
						SignUp
					</Button>
				</Link>
				<Link to={"/fogetpassword"} className="w-full">
					<Button variant={"link"} className="w-full">
						Foget Password
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Login;
