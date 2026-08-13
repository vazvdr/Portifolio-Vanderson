import { useEffect, useState } from "react";

const useSobre = () => {
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // Alterado para armazenar apenas anos e meses
  const [tempo, setTempo] = useState({ anos: 0, meses: 0 });

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

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const dataInicio = new Date("2023-01-04T08:00:00");

    const calcularExperiencia = () => {
      const agora = new Date();

      // Calcula a diferença bruta em anos e meses
      let anos = agora.getFullYear() - dataInicio.getFullYear();
      let meses = agora.getMonth() - dataInicio.getMonth();

      // Ajusta se o dia atual for menor que o dia de início do mês
      if (agora.getDate() < dataInicio.getDate()) {
        meses--;
      }

      // Ajusta se o mês atual for menor que o mês de início
      if (meses < 0) {
        anos--;
        meses += 12;
      }

      setTempo({ anos, meses });
    };

    calcularExperiencia();
    
    // Atualiza a cada 24 horas (86400000 ms), pois anos/meses não mudam a cada segundo
    const intervalo = setInterval(calcularExperiencia, 86400000);

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