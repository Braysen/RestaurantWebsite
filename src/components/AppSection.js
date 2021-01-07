import React from 'react'
import logo from '../recursos/images/app1.png'
import logo1 from '../recursos/images/app2.png'
import logo2 from '../recursos/images/movil-app.png'

export default function AppSection() {
    return (
        <section className="app section bd-container">
            <div className="app__container bd-grid">
                <div className="app__data">
                    <span className="section-subtitle">App</span>
                    <h2 className="section-title">App is aviable</h2>
                    <p className="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                    <div className="app__stores">
                        <a href="# ">
                            <img src={logo} alt="" className="app__store"/>
                        </a>
                        <a href="# ">
                            <img src={logo1} alt="" className="app__store"/>
                        </a>
                    </div>
                </div>
                <img src={logo2} alt="" className="app__img"/>
            </div>
        </section>
    )
}