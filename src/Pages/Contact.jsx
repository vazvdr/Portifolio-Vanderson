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
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMdOrLarger(window.innerWidth >= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
          <div className="bg-black text-white border border-lime-600 p-6 rounded-lg shadow-lg text-center space-y-4 max-w-xs">
            <p>{alertMessage}</p>
            <button
              onClick={closeAlert}
              className="text-white border border-lime-600 px-4 py-2 rounded-lg hover:bg-white hover:text-black focus:outline-none"
            >
              {t("contato.closeButton")}
            </button>
          </div>
        </div>
      )}

      <div id="contato" className="w-full mb-[12%] sm:mb-[12%] md:mb-[6%] lg:mb-[2%] flex flex-col items-center md:w-[98%] md:h-[600px] lg:w-[80%] lg:h-[600px]" >
        <h1 className="text-center text-3xl mb-6 mt-[8%]" style={{ fontFamily: "DoctorGlitch" }}>
          {t("contato.contactInfo")}
        </h1>

        <div className="w-full flex flex-col md:flex-row md:mb-[5%]">
          {isMdOrLarger ? (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
              className="formulario md:py-[5%] md:px-[1%] lg:px-3 md:w-1/2 lg:py-[5.3%] lg:w-1/2 md:rounded-l-lg flex flex-col justify-center"
            >
              <div className="w-full space-y-6 text-lg">
                <div
                  className="flex flex-col items-start cursor-pointer contact-info bg-clip-border hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  onClick={() => window.open("https://www.linkedin.com/in/vanderson-de-azevedo/", "_blank")}
                >

                  <div className="flex items-center space-x-3">
                    <FaLinkedin className="text-3xl" />
                    <span>Linkedin</span>
                  </div>
                  <p className="pl-[42px]">Vanderson de Azevedo</p>
                </div>

                <div
                  className="flex flex-col items-start cursor-pointer contact-info bg-clip-border hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  onClick={() => window.open("mailto:vanderson.azevedo.rocha@gmail.com")}
                >
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-3xl" />
                    <span>Email</span>
                  </div>
                  <p className="pl-[42px]">vanderson.azevedo.rocha@gmail.com</p>
                </div>

                <div
                  className="flex flex-col items-start cursor-pointer contact-info hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  onClick={() => window.open("https://wa.me/5521967441433?text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20link%20portf%C3%B3lio%20do%20Vanderson!", "_blank")}
                >
                  <div className="flex items-start space-x-3">
                    <FaWhatsapp className="text-3xl" />
                    <span>WhatsApp</span>
                  </div>
                  <p className="pl-[42px]">+55 (21) 96744-1433</p>
                </div>

                <div className="flex flex-col items-start cursor-pointer contact-info bg-clip-border hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-3xl" />
                    <span>{t("contato.adress")}</span>
                  </div>
                  <p className="pl-[42px]">Rio de Janeiro, Brasil</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="formulario w-full px-4 py-4 space-y-6 text-lg">
              <div
                className="flex flex-col items-start cursor-pointer contact-info bg-clip-border hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => window.open("https://www.linkedin.com/in/vanderson-de-azevedo/", "_blank")}
              >

                <div className="flex items-center space-x-3">
                  <FaLinkedin className="text-3xl" />
                  <span>Linkedin</span>
                </div>
                <p className="pl-[42px]">Vanderson de Azevedo</p>
              </div>

              <div
                className="flex flex-col items-start cursor-pointer contact-info bg-clip-border hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={() => window.open("mailto:vanderson.azevedo.rocha@gmail.com")}
              >
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-3xl" />
                  <span>Email</span>
                </div>
                <p className="pl-[42px]">vanderson.azevedo.rocha@gmail.com</p>
              </div>

              <div>
                <p className="pl-[42px]">Rio de Janeiro, Brasil</p>
              </div>
            </div>
          )}

          {isMdOrLarger ? (
            <motion.form
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
              className="formulario h-full flex-1 md:px-[2%] md:py-[4.8%] lg:py-[3.6%] space-y-2"
              onSubmit={handleSubmit}
            >              
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
                    className={`w-full px-4 py-2 formulario hover:scale-105 transition-all 500
                  ${errors.name ? "border-red-500 placeholder-red-500" : ""
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
                    className={`w-full px-4 py-2 formulario hover:scale-105 transition-all 500
                  ${errors.email ? "border-red-500 placeholder-red-500" : ""
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
                    className={`w-full px-4 py-2 formulario hover:scale-105 transition-all 500
                  ${errors.message ? "border-red-500 placeholder-red-500" : ""
                      }`}
                  ></textarea>
                </div>

                {/* Botão de Envio */}
                <button
                  type="submit"
                  className="formulario w-full py-3 px-6 rounded-lg bg-transparent 
                hover:bg-black hover:text-white hover:scale-105 transition-all 500
                font-bold"
                >
                  {t("contato.submitbutton")}
                </button>
              </motion.form>
          ) : (
            <form className="formulario p-6 h-full space-y-2" onSubmit={handleSubmit}>
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
                    className={`w-full px-4 py-2 formulario hover:scale-105 transition-all 500
                  ${errors.name ? "border-red-500 placeholder-red-500" : ""
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
                    className={`w-full px-4 py-2 formulario hover:scale-105 transition-all 500
                  ${errors.email ? "border-red-500 placeholder-red-500" : ""
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
                    className={`w-full px-4 py-2 formulario hover:scale-105 transition-all 500
                  ${errors.message ? "border-red-500 placeholder-red-500" : ""
                      }`}
                  ></textarea>
                </div>

                {/* Botão de Envio */}
                <button
                  type="submit"
                  className="formulario w-full py-3 px-6 rounded-lg bg-transparent 
                hover:bg-black hover:text-white hover:scale-105 transition-all 500
                font-bold"
                >
                  {t("contato.submitbutton")}
                </button>
              </form>
          )}

            </div>
      </div>
    </section>
  );
};

export default Contact;
