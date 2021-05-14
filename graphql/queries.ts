function Graphql() {
	this.homepageQuery = `query HomepageQuery {
    posts {
      nodes {
        slug, 
        title, 
        content
      }
    }
  }`;
}

export default new Graphql();
