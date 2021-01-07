import React from 'react'
import logo from '../recursos/images/plate1.png'
import logo1 from '../recursos/images/plate2.png'
import logo2 from '../recursos/images/plate3.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function MenuSection() {
    return (
        <section className="menu section bd-container" id="menu">
            <span className="section-subtitle">Special</span>
            <h2 className="section-title">Menu of the week</h2>
            <div className="menu__container bd-grid">
                <div className="menu__content">
                    <img src={logo} alt="" className="menu__img"></img>
                    <h3 className="menu__name">Barbecue salad</h3>
                    <span className="menu__detail">Delicious dish</span>
                    <span className="menu__preci">$22.00</span>
                    <a href="# " className="button menu__button"><ShoppingCartIcon/></a>
                </div>
                <div className="menu__content">
                    <img src={logo1} alt="" className="menu__img"></img>
                    <h3 className="menu__name">Salad with fish</h3>
                    <span className="menu__detail">Delicious dish</span>
                    <span className="menu__preci">$22.00</span>
                    <a href="# " className="button menu__button"><ShoppingCartIcon/></a>
                </div>
                <div className="menu__content">
                    <img src={logo2} alt="" className="menu__img"></img>
                    <h3 className="menu__name">Spinach salad</h3>
                    <span className="menu__detail">Delicious dish</span>
                    <span className="menu__preci">$9.50</span>
                    <a href="# " className="button menu__button"><ShoppingCartIcon/></a>
                </div>
            </div>
        </section>
    )
}
