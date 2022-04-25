import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const linksheight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      containerRef.current.style.height = `${linksheight}px`;
    } else {
      containerRef.current.style.height = '0px';
    }
  },[showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h4>sky<span>coding</span></h4>
          <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
            <FaBars/>
          </button>
        </div>
        <div ref={containerRef} className="links-container">
          <ul ref={linksRef} className="links">
            {links.map((link) => {
              const { url, id, text } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((icons) => {
            const { url, id, icon } = icons;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
