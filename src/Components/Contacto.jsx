import React from "react";
import "../App.css";

const ContactForm = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center p-5" id="contacto">
            <form className="form-container mx-auto p-3">
                <div className="text-white mb-4 h1 p-4">Contacto</div>
                <div className="mb-3 mx-auto p-4">
                    <label htmlFor="name" className="form-label h5">Nombre</label>
                    <input type="text" className="form-control p-4" id="name"/>
                </div>
                <div className="mb-3 mx-auto p-4">
                    <label htmlFor="email" className="form-label h5">Email</label>
                    <input type="email" className="form-control p-4" id="email"/>
                </div>
                <div className="mb-3 mx-auto p-4">
                    <label htmlFor="message" className="form-label h5">Mensaje</label>
                    <textarea className="form-control" id="message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-light text-center fs-5 d-block mx-auto mb-4 pb-3 py-3 fw-bold">Enviar</button>
            </form>
        </div>
    );
};
export default ContactForm;