import { useState } from "react";
import Components from "./Components";
import SharedComponents from "../shared-components/SharedComponents";

interface Props {}

const MobileMenu: React.FC<Props> = ({}) => {
	const { Overlay } = Components;
	const { SvgIcon } = SharedComponents;
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = () => setMenuOpen(!menuOpen);

	return (
		<>
			<SvgIcon
				className="cursor-pointer"
				onClick={() => handleMenuToggle()}
			>
				<path
					fillRule="evenodd"
					d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
				/>
			</SvgIcon>
			{menuOpen && (
				<>
					<Overlay />
					<div className="z-20 elevation-2 bg-gray-50 w-40 p-4 absolute left-0 top-12 bottom-0">
						<SvgIcon
							className="cursor-pointer mb-6"
							height="20"
							width="20"
							onClick={() => handleMenuToggle()}
						>
							<path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
						</SvgIcon>
						<ul className="uppercase">
							<li className="cursor-pointer border-b border-gray-300 py-3 w-full">
								Home
							</li>
							<li className="cursor-pointer border-b border-gray-300 py-3 w-full">
								About
							</li>
							<li className="cursor-pointer border-b border-gray-300 py-3 w-full">
								Contact
							</li>
						</ul>
					</div>
				</>
			)}
		</>
	);
};

export default MobileMenu;
