import './style/sectionContainerList.css';
import ArticleFeacture from './utils/ArticleFeacture';
import BuyMeCoffe from './utils/BuyMeCoffe';

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
      <div className="coffe">
        <BuyMeCoffe />
      </div>
    </div>
  );
};

export default SectionListLenguages;
