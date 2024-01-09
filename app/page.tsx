import Hero from "@/components/hero-section";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="flex w-full gap-16 py-36 px-24 ">
				<div className="text-stone-900 font-montserrat w-2/3 sm:w-1/2 my-auto">
					<hr className="h-1 w-12 rounded-full bg-yellow-950" />

					<div className=" text-5xl font-bold mt-4 w-9/12">
						Why should you have a cat?
					</div>
					<div className="text-lg font-medium mt-11">
						Having a cat around you can actually trigger the release of calming
						chemicals in your body which lower your stress and anxiety leves
					</div>

					<div className="text-right text-stone-900 text-opacity-60 text-xs sm:text-lg font-bold w-fit flex items-center group  mt-16">
						<span className="group-hover:text-stone-400 uppercase">
							Read MORE{" "}
						</span>
						<MoveRight className="w-4 h-4 sm:w-6 sm:h-6 ml-1 group-hover:translate-x-2 group-hover:text-stone-400 transition-all" />
					</div>
				</div>
				<PhotoGrid />
			</div>
		</>
	);
}

const PhotoGrid = () => {
	return (
		<div className="flex gap-4 sm:w-1/2">
			<div className="w-1/2">
				<Image
					src={`/cat-2.png`}
					alt="hero"
					width={190}
					height={15}
					className="w-full"
				/>
				<Image
					src={`/cat-1.png`}
					alt="hero"
					width={190}
					height={15}
					className="w-3/4 ml-auto mt-4"
				/>
			</div>
			<div className="w-1/2">
				<Image
					src={`/cat-3.png`}
					alt="hero"
					width={190}
					height={15}
					className="w-[90%]"
				/>
			</div>
		</div>
	);
};
