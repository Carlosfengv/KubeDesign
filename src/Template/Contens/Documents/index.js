import React, { Children } from 'react'
import '../Documents/style.scss'

const Documents = children => (
   <section className="Documents">
       {console.log('DOcs')}
       {console.log(children)}
        { children }
   </section>
   
)

export default Documents