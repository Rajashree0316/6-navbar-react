import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
// import logo from './logo.svg';

const Navbar = () => {
    const [showLinks,setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
     
    //callback fn
    useEffect(() =>{
        const linksHeight = linksRef.current.getBoundingClientRect().height;
       if(showLinks){
        linksContainerRef.current.style.height = `${linksHeight}px`
       }
       else{
        linksContainerRef.current.style.height = '0px';
       }
    },[showLinks])

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    {/* <img src={logo} alt='logo'className="logo"/> */}
                    <h2>NAVBAR</h2>
                    <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>

                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {social.map((socialIcon) =>{
                        const {id,url,icon} = socialIcon;
                        return(
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )

                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

/*
To adjust the height of navbar during mobile view :
Approach1) className={`${showLinks?'links-container show-container':'links-container '}`}> 
Approach2) useRef and useEffect
  => by default : null for link container ref and links ref
  =>pass this values to particular div
  => In useEffect,getBoundingClientRect() gets value from console by grabbing the height
  =>showLinks(true)- display the links,changing the height by inline css
    showLinks(false)- height will be 0px
  */