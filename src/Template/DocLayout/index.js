import React from "react"
import Navbar from '../Navbar'
import Contens from '../Contens'

const DocLayout = ({children}) => (
  <>
        <Navbar></Navbar>
        <Contens
          documents = { children }
        >
        </Contens>
  </>

)

export default DocLayout;