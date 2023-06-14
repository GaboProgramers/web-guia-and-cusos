// eslint-disable-next-line react/prop-types
const ArticleFeacture = ({ icon, title }) => {
  return (
    <article className="feacture">
      <div className="icon">{icon}</div>
      <h2 className="title">{title}</h2>
      <p className="details"></p>
    </article>
  );
};

export default ArticleFeacture;
