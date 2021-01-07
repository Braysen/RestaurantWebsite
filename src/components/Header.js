import React from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2';

export default function Header() {
    return (
        <>
            <a href="# " className="scrolltop" id="scroll-top">
                <i className="scrolltop__icon">^</i>
            </a>

        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="# " className="nav__logo">Tasty</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
                        <li className="nav__item"><a href="#menu" className="nav__link">Menu</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                        <li><i className="change-theme" id="theme-button"><Brightness2Icon/></i></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="bx bx-menu">=</i>
                </div>
            </nav>
        </header>
        </>
    )
}
