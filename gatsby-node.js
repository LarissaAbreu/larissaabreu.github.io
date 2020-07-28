const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Método para adicionar o slug para cada post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Verifica se o arquivo é um markdown
  if ( node.internal.type === 'MarkdownRemark' ) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    });
  };
};

// Método para gerar a URL dos posts
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          // Os dados passados dentro do context podem ser acessados nas queries das páginas como as variáveis do GraphQL.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      });
    });

    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        }
      });
    });
  });
};
