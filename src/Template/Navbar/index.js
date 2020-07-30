import React from 'react';
import { Link } from 'gatsby';
import '../Navbar/style.scss'
import { graphql, useStaticQuery } from 'gatsby';
import Logo from '../../images/KubeD.svg';

export default function Navbar() {
    let navbardata =  useStaticQuery(graphql`
    {
      allSidebarYaml(filter: {type: {ne: "Index"}}) {
        edges {
          node {
            id
            title
            label
            link
          }
        }
      }
    }
  `);
  

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <Link to="/" className="navbar-item">
                <img src={Logo} width="200"></img>
            </Link>
            </div>

            <div  className="navbar-menu">
                <div className="navbar-start">
                    {navbardata.allSidebarYaml.edges.map((items,index)=>{
                     return   <Link 
                                activeClassName="is-active"
                                key={index}
                                to={items.node.link} 
                                className="navbar-item">
                                    {items.node.title}
                                    {console.log("Navbar")}
                                    {console.log(items)}
                              </Link>
                              
                    })}
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary">
                      <img alt="GitHub stars" src="https://img.shields.io/github/stars/Carlosfengv/KubeDesign?style=social"></img>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
    );
}