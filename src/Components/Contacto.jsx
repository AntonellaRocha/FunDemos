import React from "react";
import "../App.css";

const ContactForm = () => {
    return (
        <div className="container">
        <div className="row justify-content-center align-items-center p-lg-5">
            <form className="form-container w-100 p-3">
                <div className="text-white mb-4 h1 p-4">Contacto</div>
                <div className="mb-3 mx-auto p-4">
                    <label htmlFor="name" className="form-label h5">Nombre</label>
                    <input type="text" placeholder="Nombre" className="form-control p-4" id="name"/>
                </div>
                <div className="mb-3 mx-auto p-4">
                    <label htmlFor="email" className="form-label h5">Email</label>
                    <input type="email" placeholder="Email" className="form-control p-4" id="email"/>
                </div>
                <div className="mb-3 mx-auto p-4">
                    <label htmlFor="message" className="form-label h5">Mensaje</label>
                    <textarea className="form-control" placeholder="Mensaje" id="message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-light text-center fs-5 d-block mx-auto mb-4 pb-3 py-3 fw-bold">Enviar</button>
            </form>
        </div>
        </div>
    );
};
export default ContactForm;