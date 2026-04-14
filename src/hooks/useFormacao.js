import { useEffect, useState } from "react";

const useFormacao = () => {
  const [animate, setAnimate] = useState(window.innerWidth >= 768);
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth >= 1024 ? 3 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 3 : 2);

      if (window.innerWidth < 768) {
        setAnimate(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const section = document.getElementById("formacao");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 100);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return {
    animate,
    showAll,
    setShowAll,
    visibleCards,
  };
};

export default useFormacao;