const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="px-5 w-full relative sm:px-30 sm:max-w-screen-xl mx-auto">
			{children}
		</div>
	);
};
export default MaxWidthWrapper;
