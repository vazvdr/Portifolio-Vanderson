import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const response = await fetch("https://nodemailer-backend-vanderson.vercel.app/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Email enviado com sucesso!");
        e.target.reset();
      } else {
        alert("Erro ao enviar o email.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center mt-[5%]">
      <div
        id="contato"
        className="formulario w-[90%] h-[450px] md:w-[48%] lg:w-[44%] p-8 rounded-lg shadow-lg mb-[3%]"
      >
        <h2
          className="text-3xl font-bold text-center mb-3"
          style={{ fontFamily: "DoctorGlitch" }}
        >
          {t("contato.title")}
        </h2>
        <form className="space-y-1" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t("contato.namelabel")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("contato.nameplaceholder")}
              className="w-full px-4 py-2 rounded-lg border text-white formulario  
            focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 formulario">
              {t("contato.emaillabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("contato.emailplaceholder")}
              className="w-full px-4 py-2 rounded-lg border text-white formulario  
            focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t("contato.messagelabel")}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("contato.messageplaceholder")}
              rows="4"
              className="w-full px-4 py-2 rounded-lg border text-white formulario  
              focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent"
              required
            ></textarea>
          </div>

          <div className="mt-2">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-transparent border border-purple-800 font-bold hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t("contato.submitbutton")}
            </button>
          </div>
        </form>
      </div>

      <div className="w-full h-0.5 bg-gradient-to-r from-purple-800 via-blue-500 to-purple-800 my-1 "></div>
      <footer className="w-full py-1 pt-2 flex flex-col items-center justify-center">
        <p className="text-center mb-2">
          Copyright © 2024 by Vanderson. All rights reserved.
        </p>
        <div className="relative flex space-x-4 mb-[1%]">
          <div className="group relative">
            <a
              href="https://www.linkedin.com/in/vanderson-de-azevedo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-black text-white text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </span>
          </div>

          <div className="group relative">
            <a
              href="https://github.com/vazvdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-black text-white text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              GitHub
            </span>
          </div>

          <div className="group relative">
            <a
              href="https://wa.me/5521967441433"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-black text-white text-sm p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              WhatsApp
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
