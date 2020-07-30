import React from "react"
import Navbar from "../Template/Navbar/index"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const Foundation = ({data}) => {

return <>
       <Navbar></Navbar>
            {console.log(data.allSidebarYaml.nodes[0].items)}
            <section className="hero">
            {data.allSidebarYaml.nodes[0].items.map((item,index)=>{
                  return <aside className="menu">
                              <p className="menu-label" key={index}>{item.title}</p>
                              <ul className="menu-list">
                                    {item.items.map((item,index)=>{
                                          return <li><Link key={index} to={item.link}>{item.title}</Link></li>
                                    })}
                              </ul>
                         </aside>
                        
                  })}
      </section>
            
      </>
}
export const query = graphql`
  {
    allSidebarYaml(filter: {type: {eq: "Foundation"}}) {
      nodes {
        title
        link
        label
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
`

export default Foundation
