import React from "react";
import img from "../../public/assets/img.avif";
import img2 from "../../public/assets/img2.avif";
import img3 from "../../public/assets/img3.avif";
import img4 from "../../public/assets/img4.avif";
import img5 from "../../public/assets/img5.avif";
import img6 from "../../public/assets/img6.avif";
import img7 from "../../public/assets/img7.avif";
import { PropertyImg } from "./PropertyImg";

export const Available = () => {
	return (
		<section id="available" className="mx-auto mb-10 max-w-[1240px]">
			<h2 className="text-center text-4xl font-bold uppercase">
				Top Properties
			</h2>
			<h2 className="pb-3 text-center text-xl font-bold">
				The house you looked at today and wanted to think about until
				tomorrow may be the same house someone looked at yesterday and
				will buy today
			</h2>
			<div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
				<PropertyImg property={img} />
				<PropertyImg property={img2} />
				<PropertyImg property={img3} />
				<PropertyImg property={img4} />
				<PropertyImg property={img5} />
				<PropertyImg property={img6} />
				<PropertyImg property={img7} />
			</div>
		</section>
	);
};
