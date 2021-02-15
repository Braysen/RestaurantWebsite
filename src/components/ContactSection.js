import React from 'react'
import Modal from './Modal'

export default function ContactSection() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
        <section className="contact section bd-container" id="contact">
            <div className="contact__container bd-grid">
                <div className="contact__data">
                    <span className="section-subtitle content__initial">Let's talk</span>
                    <h2 className="section-title content__initial">Contact us</h2>
                    <p className="contact__description">If you want reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                </div>
                <div className="contact__button">
                <Modal>
                </Modal>
                </div>
            </div>
        </section>
        
        </>
    )
}
