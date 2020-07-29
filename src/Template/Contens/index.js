import React from 'react'
import Sidebar from '../Contens/Sidebar/sidebarInit'
import '../DocLayout/style.scss'
import Documents from '../Contens/Documents/index'
const Contens = props => (
    <section className="hero">
                {console.log('contens')}
                {console.log(props)}
                <Sidebar></Sidebar>
                <div className="Documents">
                    <div className="markdown-body">
                        <Documents>
                        { props.documents }
                        </Documents>
                    </div>
                </div>
    </section>
)

export default Contens