import { MoveRight, Search } from "lucide-react";
import Image from "next/image";
import Logo from "./logo";

const Hero = () => {
	return (
		<>
			<HeroTop />
			<HeroBottom />
		</>
	);
};

const HeroTop = () => {
	return (
		<div className="relative">
			<div className="absolute bottom-28 left-36">
				<Logo className="w-80" />
				<div className="pt-4 text-white text-2xl font-medium font-montserrat w-9/12">
					Get to know more about your cat breed
				</div>
				<div className="w-85 mt-20 bg-white rounded-full flex items-center justify-between">
					<input
						type="text"
						placeholder="Enter your breed"
						className="text-lg font-medium font-monserrat p-6 rounded-full w-full placeholder:text-stone-400 text-stone-900 outline-none"
					/>
					<Search className="mx-6 text-stone-900" />
				</div>
			</div>
			<Image
				className=" rounded-tl-3xl rounded-tr-3xl"
				src={"/hero-lg.png"}
				alt="hero"
				width={1920}
				height={1080}
			/>
		</div>
	);
};

const HeroBottom = () => {
	return (
		<div className="bg-[#E3E1DC] rounded-bl-3xl rounded-br-3xl px-10 sm:px-24 pt-8 pb-16 sm:pb-24 font-montserrat">
			<div className="text-stone-900 text-sm sm:text-lg font-medium ">
				Most Searched Breeds
			</div>
			<hr className="h-1 w-12 rounded-full bg-yellow-950" />
			<div className="w-full flex items-end justify-between">
				<div className="mt-9 text-stone-900 text-xl sm:text-5xl w-1/2 font-bold ">
					66+ Breeds For you to discover
				</div>
				<div className="text-right text-stone-900 text-opacity-60 text-xs sm:text-lg font-bold w-fit flex items-center group ">
					<span className="group-hover:text-stone-400">SEE MORE </span>
					<MoveRight className="w-4 h-4 sm:w-6 sm:h-6 ml-1 group-hover:translate-x-2 group-hover:text-stone-400 transition-all" />
				</div>
			</div>
			<div className="flex gap-12 pt-10">
				<BreedCard imgURL="/cat-1.png" breedName="Bengal" />
				<BreedCard imgURL="/cat-1.png" breedName="Bengal" />
				<BreedCard imgURL="/cat-1.png" breedName="Bengal" />
				<BreedCard imgURL="/cat-1.png" breedName="Bengal" />
			</div>
		</div>
	);
};

const BreedCard = ({
	imgURL,
	breedName,
}: {
	imgURL: string;
	breedName: string;
}) => {
	return (
		<div className="group">
			<div className="w-56 h-56 rounded-3xl bg-red-200 relative group">
				<div className="w-12 h-[174.62px] bg-[#DEC68B] rounded-md absolute group-hover:-left-4 translate-y-8 opacity-0 group-hover:opacity-100 left-0 transition-all" />
				<Image
					src={imgURL}
					layout="fill"
					objectFit="cover"
					alt="hero"
					className="rounded-3xl scale-100 group-hover:scale-105 transition-all"
				/>
			</div>
			<div className="pt-5 text-stone-900 text-lg font-semibold ">
				{breedName}
			</div>
		</div>
	);
};

export default Hero;
