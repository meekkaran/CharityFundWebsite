import React from 'react'

function NavBar() {
    return (
        <div>
            <div className="main-header">
             <div className="header-upper">
              <ul className="upper-ul">
              <li className="row">Call us:+254712 345 678</li>
              <li className="row">Email us:support@gmail.com</li>
              </ul>
             </div>
            <div className="header-lower">
                <ul className="nav-bar">
                <li className="row">
                <div id="icon"></div>
                <div id="link"></div>
                </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default NavBar
