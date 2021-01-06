import React from 'react'
import logo from '../recursos/images/about.jpg'

export default function AboutSection() {
    return (
        <section className="about section bd-container" id="about">
            <div className="about__container bd-grid">
                <div className="about__data">
                    <span className="section-subtitle">About us</span>
                    <h2 className="section-title">We cook the best <br/> tasty food</h2>
                    <p className="about__description">We cook the best food in the entire city, with excellent customer service, the best meals and at the best price, visit us.</p>
                    <a href="# " className="button">Explore history</a>
                </div>
                <img src={logo} alt="" className="about__img"></img>
            </div>
        </section>
    )
}
