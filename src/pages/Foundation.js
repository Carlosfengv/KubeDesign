import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import DocLayout from '../Template/DocLayout/index'

const Foundation = () => {
/*     const FoundationData = useStaticQuery(graphql`
{
  sidebarYaml( label: { eq: "Foundation"}) {
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
`) */
return <>
        {/* <Contens
          sidebar={ FoundationData.sidebarYaml }
          documents = {FoundationData.sidebarYaml}
        ></Contens> */}
        <DocLayout
        ></DocLayout>

      </>
        
        


}

export default Foundation
