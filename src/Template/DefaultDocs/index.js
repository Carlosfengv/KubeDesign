import React from "react"
import { graphql } from "gatsby"
import Navbar from "../Navbar/index"
import Sidebar from "../Layout/Sidebar/index"
import Documents from "../Layout/Documents/index"
import "../Layout/style.scss"

export default function DefaultDocs({ data }) {
    return (
        <>
            <Navbar></Navbar>
            <section className="hero">
                <Sidebar sidebar={data.allSidebarYaml.nodes[0]}></Sidebar>
                    {console.log(data.allSidebarYaml.nodes)}
                    <Documents documents={data.mdx}></Documents>
            </section>
        </>
    
    )
  }

  export const query = graphql`
    query($slug: String!,$type:String!) {
    allSidebarYaml(filter: {type: {eq: $type}}) {
        nodes {
        title
        label
        id
        type
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
    mdx(slug: {eq: $slug}) {
        id
        body
        frontmatter {
        title
        type
        disableTableOfContents
        }
        headings {
        depth
        value
        }
    }
    }
    `
