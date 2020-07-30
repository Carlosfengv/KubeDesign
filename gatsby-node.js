/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`) // highlight-line

exports.onCreateNode = ({ node,actions }) => {
  const { createNodeField } = actions // highlight-line
  createNodeField({
    node,
    name: `slug`,
    value: node.path,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            slug
            frontmatter {
              type
              title
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(({ node }) => {
    console.log(node.slug)
    createPage({
      path: node.slug,
      component: path.resolve(`./src/Template/DefaultDocs/index.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
        type: node.frontmatter.type
      },
    })
  })
}