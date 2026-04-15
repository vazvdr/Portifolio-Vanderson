import { FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactInfo = ({ isMdOrLarger }) => {
  const { t } = useTranslation();

  const content = (
    <div className="w-full space-y-6 text-lg">
      
      {/* LINKEDIN */}
      <div
        className="flex flex-col items-start cursor-pointer contact-info hover:bg-black hover:text-white hover:scale-105 transition-all"
        onClick={() => window.open("https://www.linkedin.com/in/vanderson-de-azevedo/", "_blank")}
      >
        <div className="flex items-center space-x-3">
          <FaLinkedin className="text-3xl" />
          <span>Linkedin</span>
        </div>
        <p className="pl-[42px]">Vanderson de Azevedo</p>
      </div>

      {/* WHATSAPP (NOVO) */}
      <div
        className="flex flex-col items-start cursor-pointer contact-info hover:bg-black hover:text-white hover:scale-105 transition-all"
        onClick={() => window.open("https://wa.me/5521967441433", "_blank")}
      >
        <div className="flex items-center space-x-3">
          <FaWhatsapp className="text-3xl" />
          <span>WhatsApp</span>
        </div>
        <p className="pl-[42px]">(21) 96744-1433</p>
      </div>

      {/* EMAIL */}
      <div
        className="flex flex-col items-start cursor-pointer contact-info hover:bg-black hover:text-white hover:scale-105 transition-all"
        onClick={() => window.open("mailto:vanderson.azevedo.rocha@gmail.com")}
      >
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-3xl" />
          <span>Email</span>
        </div>
        <p className="pl-[42px]">vanderson.azevedo.rocha@gmail.com</p>
      </div>

      <div className="flex flex-col items-start contact-info hover:bg-black hover:text-white hover:scale-105 transition-all">
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-3xl" />
          <span>{t("contato.adress")}</span>
        </div>
        <p className="pl-[42px]">Rio de Janeiro, Brasil</p>
      </div>
    </div>
  );

  if (isMdOrLarger) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="formulario md:w-1/2 flex flex-col justify-center md:rounded-l-lg"
      >
        {content}
      </motion.div>
    );
  }

  return <div className="formulario w-full px-4 py-4">{content}</div>;
};

export default ContactInfo;