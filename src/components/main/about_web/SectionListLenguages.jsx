import './style/sectionContainerList.css';
import ArticleFeacture from './utils/ArticleFeacture';

const SectionListLenguages = () => {
  return (
    <div className="feactures home__feactures">
      <div className="container__list">
        <div className="items">
          <div className="grid-4 item">
            <ArticleFeacture icon="👋" title="HTML y CSS" />
          </div>
          <div className="grid-4 item">
            <ArticleFeacture icon="🎉" title="JAVASCRIPT" />
          </div>
          <div className="grid-4 item">
            <ArticleFeacture icon="👏" title="VIU y REACT" />
          </div>
          <div className="grid-4 item">
            <ArticleFeacture icon="⭐" title="Node.js" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionListLenguages;
