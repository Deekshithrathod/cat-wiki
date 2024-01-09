import Image from "next/image";

const page = () => {
	function isKey<T extends object>(x: T, k: PropertyKey): k is keyof T {
		return k in x;
	}
	const data = {
		adaptability: 5,
		affection_level: 5,
		child_friendly: 4,
		grooming: 1,
		intelligence: 5,
		health_issues: 3,
		social_needs: 5,
		stranger_friendly: 3,
	};
	return (
		<div>
			<div>
				<div>
					<Image src="/cat-1.png" width={24 * 4} height={24 * 4} alt="logo" />
					<div className="w-20 h-80 bg-orange-300 rounded-2xl" />
				</div>
				<div>
					<div className="text-stone-900 text-4xl font-semibold font-montserrat">
						Bengal
					</div>
					<div className="w-96 text-stone-900 text-lg font-medium font-montserrat">
						Bengals are a lot of fun to live with, but they're definitely not
						the cat for everyone, or for first-time cat owners. Extremely
						intelligent, curious and active, they demand a lot of interaction
						and woe betide the owner who doesn't provide it.
					</div>

					<div>
						<BoldText text="Temperament" />
						<span className="text-black text-base font-medium font-montserrat">
							Alert, Agile, Energetic, Demanding, Intelligent
						</span>
					</div>
					<div>
						<BoldText text="Origin" />
						<span className="">United States</span>
					</div>
					<div>
						<BoldText text="Life Span" />
						<span className="text-black text-base font-medium font-montserrat">
							{`12-15 years`}
						</span>
					</div>
					{/* Table */}
					<div>
						{Object.keys(data).map((key) => {
							// const rating = data[key];
							if (!isKey(data, key)) return null;
							const title = key.split("_").join(" ");
							return (
								<div
									className="w-full flex justify-between items-center py-4"
									key={key}>
									<div className="w-1/3">
										<BoldText text={title} />
									</div>
									<div className="w-2/3">
										<Meter rating={data[key]} />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div>
				<h2 className="mt-20 text-stone-900 text-4xl font-semibold font-montserrat">
					Other photos
				</h2>
				<div className="flex gap-12 flex-wrap mt-10">
					<img
						className="w-1/4 rounded-3xl"
						src="https://via.placeholder.com/278x278"
					/>
					<img
						className="w-1/4 rounded-3xl"
						src="https://via.placeholder.com/278x278"
					/>
					<img
						className="w-1/4 rounded-3xl"
						src="https://via.placeholder.com/278x278"
					/>
					<img
						className="w-1/4 rounded-3xl"
						src="https://via.placeholder.com/278x278"
					/>
					<img
						className="w-1/4 rounded-3xl"
						src="https://via.placeholder.com/278x278"
					/>
					<img
						className="w-1/4 rounded-3xl"
						src="https://via.placeholder.com/278x278"
					/>
					<img
						className="w-1/4 rounded-3xl"
						src="https://via.placeholder.com/278x278"
					/>
					<img
						className="w-1/4 rounded-3xl"
						src="https://via.placeholder.com/278x278"
					/>
				</div>
			</div>
			<div>Other Photos Sectino</div>
		</div>
	);
};

const BoldText = ({ text }: { text: string }) => {
	return (
		<div className="text-black text-base font-bold font-montserrat capitalize w-fit">
			{text}:{" "}
		</div>
	);
};

const Meter = ({ rating }: { rating: number }) => {
	const ratingBars = [];
	for (let i = 0; i < 5; i++) {
		ratingBars.push(
			<div
				key={i}
				className={`w-1/5 h-3 ${
					i < rating ? `bg-stone-700` : `bg-neutral-200`
				} rounded-lg`}
			/>
		);
	}
	return <div className="flex gap-2 w-4/5">{ratingBars}</div>;
};
export default page;
