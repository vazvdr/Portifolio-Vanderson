import ContactInfo from "../components/contato/ContactInfo";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center mt-[1.5%] px-4">
      <div
        id="contato"
        className="w-full mb-[12%] sm:mb-[12%] md:mb-[6%] lg:mb-[2%] flex flex-col items-center sm:w-[80%] md:w-[66%] md:h-[600px] lg:w-[50%] xl:w-[40%] lg:h-[600px]"
      >
        <h1
          className="text-center text-3xl mb-6 mt-[8%]"
          style={{ fontFamily: "DoctorGlitch" }}
        >
          {t("contato.contactInfo")}
        </h1>

        <div className="w-full flex justify-center items-center md:mb-[5%]">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;