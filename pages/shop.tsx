import React from "react";
import { Post } from "../models/Post";
import graphql from "../graphql/queries";
import axios from "axios";

interface Props {
	posts: Array<Post>;
}

const Shop: React.FC<Props> = ({ posts }) => {
	console.log(posts);
	return <></>;
};

export const getStaticProps = async () => {
	const URL = "http://headless-wordpress.local/graphql";
	const {
		data: {
			data: { posts },
		},
	} = await axios.post(URL, { query: graphql.homepageQuery });

	return {
		props: {
			posts,
		},
	};
};

export default Shop;
