import { useEffect, useState } from "react";

const useSobre = () => {
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [tempo, setTempo] = useState({ anos: 0, dias: 0, segundos: 0 });

  // animação da section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("sobre-mim");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // animação da imagem
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector("#foto-container");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // scroll suave
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // tempo de experiência
  useEffect(() => {
    const dataInicio = new Date("2023-01-04T08:00:00");

    const calcularExperiencia = () => {
      const agora = new Date();
      const diff = Math.floor((agora - dataInicio) / 1000);

      const diasTotais = Math.floor(diff / 86400);
      const segundosHoje = diff % 86400;

      const anos = Math.floor(diasTotais / 365);
      const dias = diasTotais % 365;

      setTempo({ anos, dias, segundos: segundosHoje });
    };

    calcularExperiencia();
    const intervalo = setInterval(calcularExperiencia, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return {
    animate,
    isVisible,
    tempo,
    handleLinkClick,
  };
};

export default useSobre;