import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();
  const [alertMessage, setAlertMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    let formErrors = {};
    if (!name) formErrors.name = t("contato.requiredField");
    if (!email) formErrors.email = t("contato.requiredField");
    if (!message) formErrors.message = t("contato.requiredField");

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

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
        setErrors({});
        e.target.reset();
      } else {
        setAlertMessage(t("contato.errorMessage"));
      }
    } catch (error) {
      console.error(error);
      setAlertMessage(t("contato.connectionError"));
    }
  };

  const closeAlert = () => setAlertMessage(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, scale: 1, transition: { duration: 1 } });
        } else {
          controls.start({ opacity: 1, scale: 1 });
        }
      },
      { threshold: 0.5, once: true }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <section className="flex flex-col items-center justify-center mt-[1.5%] px-4">
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

      <div id="contato" className="w-full mt-[8%] mb-[5%] flex flex-col items-center md:w-[90%] lg:w-[70%]" >
        <h1 className="text-center text-3xl mb-6" style={{ fontFamily: "DoctorGlitch" }}>
          {t("contato.contactInfo")}
        </h1>

        <div className="w-full flex flex-col md:flex-row md:space-x-0">
          {/* Div com as informações de contato */}
          <motion.div
            ref={sectionRef}
            className="formulario w-full px-2 py-2 md:py-[7.7%] md:px-[2%] md:py-16 lg:px-8 lg:py-[6.5%] lg:w-1/2 rounded-lg md:rounded-l-lg shadow-lg border border-purple-800 h-full flex-1 border-gradient"
            animate={controls}
            initial={{ opacity: 0, scale: 0.5 }}
            style={{borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",}}
          >
            <div className="w-full rounded-lg shadow-lg flex flex-col justify-center space-y-6 text-lg text-white">
              <div
                className="flex flex-col items-start cursor-pointer border-b border-transparent bg-clip-border hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                style={{
                  borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",
                }}
                onClick={() => window.open("https://www.linkedin.com/in/vanderson-de-azevedo/", "_blank")}
              >

                <div className="flex items-center space-x-3">
                  <FaLinkedin className="text-3xl" />
                  <span>Linkedin</span>
                </div>
                <p className="pl-[42px]">Vanderson de Azevedo</p>
              </div>

              <div
                className="flex flex-col items-start cursor-pointer border-b border-transparent bg-clip-border hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                style={{
                  borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",
                }}
                onClick={() => window.open("mailto:vanderson.azevedo.rocha@gmail.com")}
              >
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-3xl" />
                  <span>Email</span>
                </div>
                <p className="pl-[42px]">vanderson.azevedo.rocha@gmail.com</p>
              </div>

              <div
                className="flex flex-col items-start cursor-pointer border-b border-transparent bg-clip-border hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                style={{
                  borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",
                }}
                onClick={() => window.open("https://wa.me/5521967441433?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20link%20portf%C3%B3lio%20do%20Vanderson!", "_blank")}
              >
                <div className="flex items-start space-x-3">
                  <FaWhatsapp className="text-3xl" />
                  <span>WhatsApp</span>
                </div>
                <p className="pl-[42px]">+55 (21) 96744-1433</p>
              </div>

              <div className="flex flex-col items-start cursor-pointer border-b border-transparent bg-clip-border hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                style={{
                  borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",
                }}>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-3xl" />
                  <span>{t("contato.adress")}</span>
                </div>
                <p className="pl-[42px]">Rio de Janeiro, Brasil</p>
              </div>
            </div>
          </motion.div>

          {/* Div com o formulário */}
          <motion.div
            ref={sectionRef}
            className="formulario w-full p-9 rounded-lg shadow-lg border border-purple-800 h-full flex-1 border-gradient"
            animate={controls}
            initial={{ opacity: 0, scale: 0.5 }}
            style={{borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",}}
          >
            <form className="space-y-2 md:py-[2%]" onSubmit={handleSubmit}>
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t("contato.namelabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={errors.name ? errors.name : t("contato.nameplaceholder")}
                  style={{borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",}}
                  className={`w-full px-4 py-2 rounded-lg formulario text-white 
                  focus:outline-none focus:ring-2 focus:ring-purple-800 
                  focus:border-transparent ${errors.name ? "border-red-500 placeholder-red-500" : ""
                    }`}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t("contato.emaillabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={errors.email ? errors.email : t("contato.emailplaceholder")}
                  style={{borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",}}
                  className={`w-full px-4 py-2 rounded-lg border-b border-l formulario text-transparent focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent ${errors.email ? "border-red-500 placeholder-red-500" : ""
                    }`}
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t("contato.messagelabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={errors.message ? errors.message : t("contato.messageplaceholder")}
                  rows="3"
                  style={{borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",}}
                  className={`w-full px-4 py-2 rounded-lg border-b border-l formulario text-white focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent ${errors.message ? "border-red-500 placeholder-red-500" : ""
                    }`}
                ></textarea>
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                style={{borderImage: "linear-gradient(to right, #6b21a8, #3b82f6, #6b21a8) 1",
                  animation: "borderAnimation 1s infinite",}}
                className="formulario w-full py-3 px-6 rounded-lg bg-transparent border border-purple-800 font-bold hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t("contato.submitbutton")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
