import React from 'react'
import { Link } from "gatsby"
import './style.scss'

const Sidebar = ({sidebar}) => (
    <div className="left">
        <div className="Sidebar">
        {console.log('sidebar')}
        {console.log(sidebar)}
        {sidebar.node.items.map((items,index)=>{
        return <aside className="menu">
                <p className="menu-label" key={index}>{items.title}</p>
                {console.log('items')}
                {console.log(items)}
                <ul className="menu-list">
                    {items.items.map((item,index)=>{
                        return <li key={item.title}><Link key={index} to={item.link}>{item.title}</Link></li>
                    })
                    }
                </ul>
                </aside>
    })}
    </div>
    </div>
    
)

export default Sidebar