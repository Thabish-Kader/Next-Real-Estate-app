import React from "react";

export const Hero = () => {
	return (
		<section className="hero-img relative top-0 left-0 right-0 bottom-0 mb-14  h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat">
			{/* overlay */}
			<div className="absolute top-0 left-0 h-full w-full bg-black/60" />
			{/* text */}
			<div className="relative top-0 left-0 h-full w-full">
				<div className="absolute top-[50%] left-[15%]">
					<h1 className="text-4xl font-bold uppercase text-white sm:text-5xl">
						Find your dream propertys
					</h1>
					<p className="text-xl text-gray-300 sm:text-3xl">
						Ninety percent of all millionares become so through
						owning real estates
					</p>
					<button className="mt-3 border px-8 py-2 text-2xl font-bold uppercase text-white duration-500 hover:bg-white hover:text-black">
						Look now
					</button>
				</div>
			</div>
		</section>
	);
};
