interface PostNode {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
}

export interface Post {
	nodes: PostNode[];
}
