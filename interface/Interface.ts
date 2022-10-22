import { StaticImageData } from "next/image";

export interface IHero {
	heading: string;
	message: string;
}

export interface IPropertiesProps {
	data: Array<Mydata>;
}

export type Mydata = {
	image: string;
};

export interface IimageProps {
	property: StaticImageData;
}
