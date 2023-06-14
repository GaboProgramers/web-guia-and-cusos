import './style/sectionContainerTitle.css';

const SectionContainerTitle = () => {
  return (
    <section>
      <div className="main">
        <h1 className="name">
          <span className="clip">GaboDev</span>
        </h1>
        <p className="text">Cursos para desarrolladores web.</p>
        <p className="sub__text">
          Encuentra todas las guías y cursos de gabodev en un solo lugar ⭐
        </p>
        <div className="actions">
          <div className="action">
            <a href="" className="btn mediun brand">
              Ingresar
            </a>
          </div>
          <div className="action">
            <a href="" className="btn mediun alt">
              Ir a youtube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContainerTitle;
