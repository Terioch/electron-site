import React from "react";
import Link from "next/link";
import Components from "./Components";

interface Props {}

const Nav: React.FC<Props> = () => {
	const { MobileMenu, DesktopMenu } = Components;

	return (
		<nav className="flex flex-col elevation-3">
			<section className="flex justify-between bg-black bg-opacity-80 text-gray-100 py-3 px-4 md:px-12">
				<div>
					<p>(415) 712-8205</p>
				</div>
				<div>Social Media</div>
			</section>
			<section className="flex justify-between py-3 px-4 md:px-12">
				<div className="md:hidden">
					<MobileMenu />
				</div>
				<div className="hidden md:block">
					<DesktopMenu />
				</div>
				<header>
					<h1>Electron</h1>
				</header>
				<Link href="/shop">
					<button>Shop</button>
				</Link>
			</section>
		</nav>
	);
};

export default Nav;
