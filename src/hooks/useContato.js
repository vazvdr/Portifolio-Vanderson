import { useState, useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

export const useContato = () => {
  const { t } = useTranslation();

  const [alertMessage, setAlertMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  const controls = useAnimation();
  const sectionRef = useRef(null);

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
          headers: { "Content-Type": "application/json" },
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
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  return {
    alertMessage,
    errors,
    isMdOrLarger,
    handleSubmit,
    closeAlert,
    controls,
    sectionRef,
  };
};