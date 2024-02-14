import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'

const ChangeProfile:React.FC = () => {

    const submitHandler = (e:any)=>{
        e.preventDefault()
    }
  return (
		<div className="w-full h-full flex justify-center  max-sm:items-start pt-40 ">
			<form 
            onSubmit={submitHandler}
            className="w-[50%]  max-sm:w-full">
				<Label className="text-xl" htmlFor="avatar">
					Profile Picture
				</Label>
				<Input
					className="text-foreground text-lg p-2 my-4 relative after:h-full after:w-full after:absolute after:bg-foreground after:left-0 after:top-0 after:content-['Choose_file'] after:text-background after:text-xl after:p-1"
					id="avatar"
					name="avatar"
					placeholder="avatar"
					type="file"
				/>

				<Button className="w-full my-4 text-xl active:bg-muted ">
					Save
				</Button>

				<h1 className="text-xl text-center my-4 font-semibold">
					Preview
				</h1>

				<img
					className="min-w-[20vh] h-[20vh] rounded-[50%] object-cover  mx-auto "
					src="https://plus.unsplash.com/premium_photo-1700802066668-d3aa7fef7069?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
			</form>
		</div>
  );
}

export default ChangeProfile