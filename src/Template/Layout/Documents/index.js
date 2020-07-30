import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../Documents/style.scss"

const Documents = ({ documents }) => (
    <div className="Documents">
                    <div className="markdown-body">
                        <div>
                        <h1>{documents.frontmatter.title}</h1>
                        <hr></hr>
                        <MDXRenderer>{documents.body}</MDXRenderer>
                        </div>
                        
                    </div>
                    <div className="markdown-sidecar">
                            {console.log(documents.headings)}
                            {documents.headings.length !==0? <ul className="sidecar">
                                { documents.headings.map((item,index)=>{
                                    return <li key={index}>{item.value}</li>
                            })}</ul>:<ul className="sidecar"><li>没有找到相关索引</li></ul>}
                            <li></li>
                        </div>
    </div>
)

export default Documents
