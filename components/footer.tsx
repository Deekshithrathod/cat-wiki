import Logo from "./logo";
import MaxWidthWrapper from "./max-width-wrapper";

const Footer = () => {
	return (
		<MaxWidthWrapper>
			<div className="w-full bg-black flex align-middle justify-between py-10 px-16 rounded-tr-[4rem] rounded-tl-[4rem]">
				<Logo className="h-12 pl-20" />
				<div className="text-white text-lg font-normal font-montserrat ">
					<div>
						created by <a className="font-bold underline">Deekshith Rathod</a>
					</div>
					<div className="text-sm">© 2024</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};
export default Footer;
