import React from 'react'
import Sidebar from '../Contens/Sidebar/sidebarInit'
import '../DocLayout/style.scss'

const Contens = props => (
    <section className="hero">
                {console.log('contens')}
                {console.log(props)}
                <Sidebar></Sidebar>
{/*                 <Documents>
                { props.documents }
                </Documents> */}
                <div className="Documents"
                >
                <div className="content">{props.documents}</div></div>
    </section>
)

export default Contens