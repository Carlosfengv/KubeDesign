import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Sidebar from '../Sidebar/index'

export default function SidebarInit() {
    const locationurl = window.location.pathname.slice(1).split("/")
    const data = useStaticQuery(graphql`
    {
      allSidebarYaml {
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
  `)

const allnav = data.allSidebarYaml.edges
const result = allnav.filter(item => item.node.type == locationurl.slice(0,1))
/*   const result = data.filter(data,data.allSidebarYaml.edges.node.type = locationurl)
  console.log(result); */
  /* return <pre>{JSON.stringify(data, null, 4)}{console.log('link')}{console.log(data)}{console.log(result)}</pre> */
  return <Sidebar
            sidebar={result[0]}
  >{console.log('result')}{console.log(locationurl)}</Sidebar>
}