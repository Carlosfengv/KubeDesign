import React from 'react'
import { Link } from "gatsby"
import './style.scss'

const Sidebar = ({sidebar}) => (
    <div className="left">
        <div className="Sidebar">
        {console.log('sidebar')}
        {console.log(sidebar)}
        {sidebar.node.items.map((items,index)=>{
        return <aside className="menu" key={index}>
                <p className="menu-label" key={index}>{items.title}</p>
                {console.log('items')}
                {console.log(items)}
                <ul className="menu-list">
                    {items.items.map((item,index)=>{
                        return <li key={item.title}><Link key={index} activeClassName="is-active" to={item.link}>{item.title}({item.label})</Link></li>
                    })
                    }
                </ul>
                <hr align="left"></hr>
                </aside>
    })}
    </div>
    </div>
    
)

export default Sidebar