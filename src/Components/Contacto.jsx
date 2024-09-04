import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../App.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ru7kd0p',
            'template_tnu1onn',
            e.target,
            'VH4Aj5SMqZA42zKEU'
        )
            .then((result) => {
                console.log(result.text);
                alert('¡Mensaje enviado!');
            }, (error) => {
                console.log(error.text);
                alert('Error al enviar su mensaje');
            });

        // Limpiar el formulario después del envío
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center p-lg-5">
                <form className="form-container w-100 p-3" onSubmit={sendEmail}>
                    <div className="text-white mb-4 h1 p-4">Contacto</div>

                    <div className="mb-3 mx-auto p-4">
                        <label htmlFor="name" className="form-label h5">Nombre</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="form-control p-4"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3 mx-auto p-4">
                        <label htmlFor="email" className="form-label h5">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control p-4"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3 mx-auto p-4">
                        <label htmlFor="message" className="form-label h5">Mensaje</label>
                        <textarea
                            className="form-control"
                            placeholder="Mensaje"
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-light text-center fs-5 d-block mx-auto mb-4 pb-3 py-3 fw-bold"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;







