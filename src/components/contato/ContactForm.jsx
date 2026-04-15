import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactForm = ({ isMdOrLarger, handleSubmit, errors }) => {
  const { t } = useTranslation();

  const formContent = (
    <>
      <div>
        <label>{t("contato.namelabel")}</label>
        <input
          name="name"
          placeholder={errors.name || t("contato.nameplaceholder")}
          className={`w-full px-4 py-2 formulario ${errors.name ? "border-red-500" : ""}`}
        />
      </div>

      <div>
        <label>{t("contato.emaillabel")}</label>
        <input
          name="email"
          placeholder={errors.email || t("contato.emailplaceholder")}
          className={`w-full px-4 py-2 formulario ${errors.email ? "border-red-500" : ""}`}
        />
      </div>

      <div>
        <label>{t("contato.messagelabel")}</label>
        <textarea
          name="message"
          rows="3"
          placeholder={errors.message || t("contato.messageplaceholder")}
          className={`w-full px-4 py-2 formulario ${errors.message ? "border-red-500" : ""}`}
        />
      </div>

      <button type="submit" className="formulario w-full py-3 font-bold">
        {t("contato.submitbutton")}
      </button>
    </>
  );

  if (isMdOrLarger) {
    return (
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="formulario flex-1 space-y-2"
      >
        {formContent}
      </motion.form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="formulario p-6 space-y-2">
      {formContent}
    </form>
  );
};

export default ContactForm;