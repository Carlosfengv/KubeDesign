/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/Template/test.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query loadPagesQuery ($type: String!) {
        allSidebarYaml (filter: {type: {eq: $type}}){
            edges {
              node {
                title
                type
                id
                items {
                  label
                  title
                  items {
                    label
                    link
                    title
                  }
                }
              }
            }
          }
    }
  `, { type: "Foundation" }).then(result => {
    if (result.errors) {
      throw result.errors
    }
  })
}