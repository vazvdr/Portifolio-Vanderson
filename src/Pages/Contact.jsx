import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();
  const [alertMessage, setAlertMessage] = useState(null); // Para controlar o conteúdo do alerta
  const controls = useAnimation(); // Controles de animação
  const sectionRef = useRef(null); // Ref para o contêiner do formulário

  // Função de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      const response = await fetch(
        "https://nodemailer-backend-vanderson.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        setAlertMessage(t("contato.successMessage"));
        e.target.reset();
      } else {
        setAlertMessage(t("contato.errorMessage"));
      }
    } catch (error) {
      console.error(error);
      setAlertMessage(t("contato.connectionError"));
    }
  };

  const closeAlert = () => setAlertMessage(null); // Fechar o alerta

  // useEffect para monitorar a visibilidade da seção
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
        } else {
          controls.start({ opacity: 0, scale: 0.5 }); // Se sair da tela, voltar para o estado inicial
        }
      },
      { threshold: 0.5 } // Executa a animação quando 50% do elemento está visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Limpar a observação quando o componente for desmontado
      }
    };
  }, [controls]);

  return (
    <section className="flex flex-col items-center justify-center mt-[5%]">
      {alertMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg text-center space-y-4 max-w-xs">
            <p>{alertMessage}</p>
            <button
              onClick={closeAlert}
              className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none"
            >
              {t("contato.closeButton")}
            </button>
          </div>
        </div>
      )}

      {/* Contêiner do formulário com ref */}
      <motion.div
        ref={sectionRef}
        id="contato"
        className="formulario w-[90%] h-[480px] md:w-[48%] lg:w-[44%] p-8 rounded-lg shadow-lg mb-[3%] border border-purple-800"
        animate={controls} // Associando os controles de animação
        initial={{ opacity: 0, scale: 0.5 }} // Começa invisível e menor
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
            <label htmlFor="email" className="block text-sm font-medium mb-2">
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
              className="formulario w-full py-3 px-6 rounded-lg bg-transparent border border-purple-800 font-bold hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t("contato.submitbutton")}
            </button>
          </div>
        </form>
      </motion.div>

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
