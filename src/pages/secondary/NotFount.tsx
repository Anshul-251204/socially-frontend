
import img from "../../../public/6894736-removebg-preview.png"
const NotFount = ({title = "Not Found"}:{title?:string}) => {
  return (
		<div className=" mt-4 text-foreground bg-background w-full pt-10 flex flex-col gap-6 items-center justify-center">
			<img
			className=" w-[20vw] h-[20vw] "
				src={img}
				alt=""
			/>

			<h1 className='text-4xl text-center '>{title}</h1>
		</div>
  );
}

export default NotFount