import Image from "next/image";
import React, { useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { IPropertiesProps } from "../../interface/Interface";

export const Properties = ({ data }: IPropertiesProps) => {
	const [current, setCurrent] = useState<number>(0);
	const length = data.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(data) || data.length <= 0) {
		return null;
	}

	return (
		<section id="properties" className="m-10 mx-auto max-w-[1240px]">
			<h1 className="text-center text-4xl font-bold uppercase">
				Properties
			</h1>
			<div className="relative flex justify-center p-4">
				{data.map((img, index) => (
					<div
						key={index}
						className={
							current === index
								? "opacity-[1] duration-1000 ease-in"
								: "opacity-0"
						}
					>
						<BsCaretLeftFill
							onClick={prevSlide}
							size={50}
							className="absolute top-[50%] left-[30px] z-[2] cursor-pointer select-none text-black/75"
						/>
						{index == current && (
							<Image
								src={img.image}
								alt="/"
								height="600"
								width="1440px"
								object-objectFit="cover"
							/>
						)}
						<BsCaretRightFill
							onClick={nextSlide}
							size={50}
							className="absolute top-[50%] right-[30px] z-[2] cursor-pointer select-none text-black/75"
						/>
					</div>
				))}
			</div>
		</section>
	);
};
