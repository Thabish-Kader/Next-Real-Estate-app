import Image from "next/image";
import React from "react";
import { IimageProps } from "../interface/Interface";
import { BsFillHouseDoorFill } from "react-icons/bs";

export const PropertyImg = ({ property }: IimageProps) => {
	return (
		<div className="relative">
			<Image
				src={property}
				alt="property img"
				className="h-full w-full"
				height="500px"
				width="400px"
				layout="responsive"
				objectFit="cover"
			/>
			<div className="group absolute top-0 left-0 flex h-full w-full items-center justify-center hover:bg-black/60">
				<p className="opacity-0 group-hover:opacity-100">
					<BsFillHouseDoorFill className="text-green-500" size={30} />
				</p>
			</div>
		</div>
	);
};
