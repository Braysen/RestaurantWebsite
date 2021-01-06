import React from 'react'

export default function Header() {
    return (
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="# " className="nav__logo">Tasty</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
                        <li className="nav__item"><a href="#menu" className="nav__link">Menu</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="bx bx-menu">H</i>
                </div>
            </nav>
        </header>
    )
}
