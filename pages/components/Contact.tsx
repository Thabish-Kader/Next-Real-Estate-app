import React from "react";

export const Contact = () => {
	return (
		<section id="contact" className=" m-auto h-screen  bg-black">
			<div className="flex h-full w-full flex-col items-center justify-center">
				<form action="" className="m-auto max-w-[600px] text-white ">
					<h1 className="pb-10 text-center text-4xl font-bold uppercase text-white">
						Contact Us
					</h1>
					<div>
						<input
							type="text"
							placeholder="Name..."
							className="rounded-md border-2 border-white bg-black p-2 "
						/>
						<input
							type="email"
							placeholder="Email..."
							className="ml-5 rounded-md border-2 border-white bg-black p-2"
						/>
					</div>
					<input
						className="my-2 w-full rounded-lg border-2 bg-black p-3"
						type="text"
						placeholder="Subject"
					/>
					<textarea
						className="w-full rounded-md border-2 bg-black p-3 shadow-lg"
						cols={30}
						rows={10}
						placeholder="Message"
					></textarea>
					<button className="mt-2 w-full rounded-md border-2 p-3 text-white shadow-lg duration-500 hover:bg-white hover:text-black">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};
