import React from "react";
import "../App.css";

const ContactForm = () => {
  return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <form className="p-4" style={{ backgroundColor: '#000', borderRadius: '15px', width: '100%', maxWidth: '500px' }}>
              <div className="text-white mb-4 h2">Contacto</div>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white fw-bold">Nombre</label>
                  <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
              </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white fw-bold">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Tu email" />
              </div>
              <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white fw-bold">Mensaje</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Tu mensaje"></textarea>
              </div>
              <button type="submit" className="btn btn-light d-block mx-auto fw-bold" style={{ backgroundColor: '#fff' }}>Enviar</button>          </form>
      </div>
  );
};
export default ContactForm;