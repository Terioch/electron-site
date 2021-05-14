import React from "react";
import Components from "./Components";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	const { Meta, Nav } = Components;
	const { title, keywords, description } = metaData;

	return (
		<>
			<Meta title={title} keywords={keywords} description={description} />
			<div>
				<Nav />
				<main>{children}</main>
			</div>
		</>
	);
};

const metaData = {
	title: "Electron",
	keywords: "self driving, car, auto-pilot, ai, machine learning",
	description: "We will win self driving cars.",
};

export default Layout;
