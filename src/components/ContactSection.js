import React from 'react'

export default function ContactSection() {
    return (
        <section className="contact section bd-container" id="contact">
            <div className="contact__container bd-grid">
                <div className="contact__data">
                    <span className="section-subtitle content__initial">Let's talk</span>
                    <h2 className="section-title content__initial">Contact us</h2>
                    <p className="contact__description">If you want reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                </div>
                <div className="contact__button">
                    <a href="# " className="button">Contact us now</a>
                </div>
            </div>
        </section>
    )
}
