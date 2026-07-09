import Estacio from "../../assets/Estacio.webp";
import Docker from "../../assets/Docker.webp";
import Tailwind from "../../assets/TailwindCSS.webp";
import Git from "../../assets/GitHub.webp";
import GitLab from "../../assets/GitLab.webp";
import Linux from "../../assets/Linux.webp";
import English from "../../assets/Proficient-English.webp";
import Spring from "../../assets/Spring2025.webp";
import SpringMicrosservices from "../../assets/SpringMicrosservices2025.webp";
import SpringRabbitMQ from "../../assets/SpringRabbitMQ.webp";
import ReactCourse from "../../assets/React.webp";
import Angular from "../../assets/Angular.webp";
import Nestjs from "../../assets/Nestjs.webp";
import DevOps from "../../assets/DevOps.webp";
import Hacker from "../../assets/EthicalHacking.webp"

const FormacaoComponent = ({
  t,
  animate,
  showAll,
  visibleCards,
  setShowAll,
}) => {
  const cursos = [
    { img: Estacio, titulo: "formacao.cardCollege.titulo", instituicao: "formacao.cardCollege.subtitulo", periodo: "formacao.cardCollege.periodo", descricao: "formacao.cardCollege.descricao" },
    { img: English, titulo: "formacao.cardEnglish.titulo", instituicao: "formacao.cardEnglish.subtitulo", periodo: "formacao.cardEnglish.periodo", descricao: "formacao.cardEnglish.descricao" },
    { img: Hacker, titulo: "formacao.cardHacker.titulo", instituicao: "formacao.cardHacker.subtitulo", periodo: "formacao.cardHacker.periodo", descricao: "formacao.cardHacker.descricao" },
    { img: DevOps, titulo: "formacao.cardDevOps.titulo", instituicao: "formacao.cardDevOps.subtitulo", periodo: "formacao.cardDevOps.periodo", descricao: "formacao.cardDevOps.descricao" },
    { img: Nestjs, titulo: "formacao.cardNest.titulo", instituicao: "formacao.cardNest.subtitulo", periodo: "formacao.cardNest.periodo", descricao: "formacao.cardNest.descricao" },
    { img: Angular, titulo: "formacao.cardAngular.titulo", instituicao: "formacao.cardAngular.subtitulo", periodo: "formacao.cardAngular.periodo", descricao: "formacao.cardAngular.descricao" },
    { img: GitLab, titulo: "formacao.cardGitLab.titulo", instituicao: "formacao.cardGitLab.subtitulo", periodo: "formacao.cardGitLab.periodo", descricao: "formacao.cardGitLab.descricao" },
    { img: SpringRabbitMQ, titulo: "formacao.cardSpringRabbitMQ.titulo", instituicao: "formacao.cardSpringRabbitMQ.subtitulo", periodo: "formacao.cardSpringRabbitMQ.periodo", descricao: "formacao.cardSpringRabbitMQ.descricao" },
    { img: SpringMicrosservices, titulo: "formacao.cardSpringMicrosservices.titulo", instituicao: "formacao.cardSpringMicrosservices.subtitulo", periodo: "formacao.cardSpringMicrosservices.periodo", descricao: "formacao.cardSpringMicrosservices.descricao" },
    { img: ReactCourse, titulo: "formacao.cardReact.titulo", instituicao: "formacao.cardReact.subtitulo", periodo: "formacao.cardReact.periodo", descricao: "formacao.cardReact.descricao" },
    { img: Spring, titulo: "formacao.cardSpring.titulo", instituicao: "formacao.cardSpring.subtitulo", periodo: "formacao.cardSpring.periodo", descricao: "formacao.cardSpring.descricao" },
    { img: Docker, titulo: "formacao.cardDocker.titulo", instituicao: "formacao.cardDocker.subtitulo", periodo: "formacao.cardDocker.periodo", descricao: "formacao.cardDocker.descricao" },
    { img: Tailwind, titulo: "formacao.cardTailwind.titulo", instituicao: "formacao.cardTailwind.subtitulo", periodo: "formacao.cardTailwind.periodo", descricao: "formacao.cardTailwind.descricao" },
    { img: Git, titulo: "formacao.cardGit.titulo", instituicao: "formacao.cardGit.subtitulo", periodo: "formacao.cardGit.periodo", descricao: "formacao.cardGit.descricao" },
    { img: Linux, titulo: "formacao.cardLinux.titulo", instituicao: "formacao.cardLinux.subtitulo", periodo: "formacao.cardLinux.periodo", descricao: "formacao.cardLinux.descricao" },
  ];

  return (
    <section
      id="formacao"
      className={`relative py-16 w-full flex flex-col items-center transition-all duration-1000 ${
        animate ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
      }`}
    >
      <h1
        className="text-2xl md:text-3xl md:font-bold mb-8 mt-20 animate-slide-left"
        style={{ fontFamily: "DoctorGlitch" }}
      >
        {t("formacao.titulo")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-0">
        {(showAll ? cursos : cursos.slice(0, visibleCards)).map((curso, index) => (
          <div
            key={index}
            className="card p-6 w-[90%] mx-auto rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img src={curso.img} alt={t(curso.titulo)} className="w-full object-contain" />
            <h2 className="text-xl font-semibold">{t(curso.titulo)}</h2>
            <p>{t(curso.instituicao)}</p>
            <p className="mb-2">{t(curso.periodo)}</p>

            <ul className="list-disc list-inside text-sm space-y-1">
              {t(curso.descricao, { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {cursos.length > visibleCards && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="card mt-6 px-4 py-2 w-[90%] rounded-lg font-bold text-3x1 transition-all hover:scale-105"
        >
          {showAll ? t("formacao.verMenos") : t("formacao.verMais")}
        </button>
      )}
    </section>
  );
};

export default FormacaoComponent;