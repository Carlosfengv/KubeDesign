import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import DocLayout from '../Template/DocLayout/index'

const Components = () => {
    const ComponentsData = useStaticQuery(graphql`
{
        sidebarYaml(label: {eq: "Components"}) {
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
`)
return <>
        {/* <Contens
          sidebar={ FoundationData.sidebarYaml }
          documents = {FoundationData.sidebarYaml}
        ></Contens> */}
        <DocLayout
          sidebar={ ComponentsData.sidebarYaml }
        ></DocLayout>

      </>
        
        


}

export default Components
