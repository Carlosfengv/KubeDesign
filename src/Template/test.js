import React from 'react'
import Navbar from '../Template/Navbar'


const test = ({children}) => (
    <>
        <Navbar></Navbar>
        <section className="hero">
                {console.log("mdxcontent")}
                {console.log(children)}
                <div>{children}</div>
            </section>
    </>
    
)

export default test