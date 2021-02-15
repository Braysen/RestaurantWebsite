import React from 'react'
import logo from '../recursos/images/home.png'

export default function HomeSection() {
    return (
        <section className="home" id="home">
            <div className="home__container bd-container bd-grid">
                <div className="home__data">
                    <h1 className="home__title">Tasty food</h1>
                    <h1 className="home__subtitle">Try the best food of <br/> the week.</h1>
                    <a href="#menu" className="button">View Menu</a>
                </div>
                <img src={logo} alt="" className="home__img"></img>
            </div>
        </section>
    )
}
