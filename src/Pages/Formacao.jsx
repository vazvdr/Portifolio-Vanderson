import React from "react";
import { useTranslation } from "react-i18next";

const Formacao = () => {
    const { t } = useTranslation();
    
    const cursos = [
        {
            img: "../../src/assets/Estacio.png",
            titulo: t("formacao.card1.titulo"),
            instituicao: t("formacao.card1.subtitulo"),
            periodo: t("formacao.card1.periodo"),
            descricao: t("formacao.card1.descricao", { returnObjects: true }) 
        },
        {
            img: "../../src/assets/Docker.jpg",
            titulo: t("formacao.card2.titulo"),
            instituicao: t("formacao.card2.subtitulo"),
            periodo: t("formacao.card2.periodo"),
            descricao: t("formacao.card2.descricao", { returnObjects: true }) 
        },
        {
            img: "../../src/assets/TailwindCSS.jpg",
            titulo: t("formacao.card3.titulo"),
            instituicao: t("formacao.card3.subtitulo"),
            periodo: t("formacao.card3.periodo"),
            descricao: t("formacao.card3.descricao", { returnObjects: true }) 
        },
        {
            img: "../../src/assets/GitHub.jpg",
            titulo: t("formacao.card4.titulo"),
            instituicao: t("formacao.card4.subtitulo"),
            periodo: t("formacao.card4.periodo"),
            descricao: t("formacao.card4.descricao", { returnObjects: true }) 
        },
        {
            img: "../../src/assets/Linux.jpg",
            titulo: t("formacao.card5.titulo"),
            instituicao: t("formacao.card5.subtitulo"),
            periodo: t("formacao.card5.periodo"),
            descricao: t("formacao.card5.descricao", { returnObjects: true })
        },
        {
            img: "../../src/assets/English-C2.jpg",
            titulo: t("formacao.card6.titulo"),
            instituicao: t("formacao.card6.subtitulo"),
            periodo: t("formacao.card6.periodo"),
            descricao: t("formacao.card6.descricao", { returnObjects: true })
        }
    
    ];

    return (
        <section id="formacao" className="relative py-16 w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-8 mt-20 animate-slide-right" style={{ fontFamily: "DoctorGlitch" }}>
                {t("formacao.titulo")}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cursos.map((curso, index) => (
                    <div key={index} className="card p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                        <img src={curso.img || ""} alt={curso.titulo || "Imagem do curso"} className="w-[100%] object-contain" />
                        <h2 className="text-xl font-semibold">{curso.titulo || "Curso"}</h2>
                        <p className="text-gray-400">{curso.instituicao || "Instituição"}</p>
                        <p className="text-gray-400 mb-2">{curso.periodo || "Período"}</p>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                            {(Array.isArray(curso.descricao) ? curso.descricao : [curso.descricao]).map((item, i) => (
                                <li key={i} className="block">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Formacao;
