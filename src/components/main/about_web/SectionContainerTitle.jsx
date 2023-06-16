import { Link } from 'react-router-dom';
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
            <Link to="/00-started" className="btn mediun brand">
              Ingresar
            </Link>
            {/* <a href="/00-started" className="btn mediun brand">
              Ingresar
            </a> */}
          </div>
          <div className="action">
            <a
              href="https://9qr.de/J9E6Lr"
              className="btn mediun alt"
              rel="noreferrer"
              target="_blank"
            >
              Ir a youtube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContainerTitle;
