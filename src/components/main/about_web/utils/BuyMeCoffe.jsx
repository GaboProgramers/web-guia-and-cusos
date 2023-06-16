const BuyMeCoffe = () => {
  return (
    <div className="coffe__container">
      <div className="coffe__link">
        <a
          href="https://buymeacoffee.com/gabodev3"
          className="coffe__destock"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/bmcbrand/Buttons_&_Icons/blue-button.png"
            alt="Buy me Coffe"
            className="coffe_img-destock"
          />
        </a>
      </div>
      <div className="coffe__link">
        <a
          href="https://buymeacoffee.com/gabodev3"
          className="coffe__movile"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/bmcbrand/SVG_Files/bmc-logo.svg"
            alt="Buy me Coffe"
            className="coffe_img"
          />
        </a>
      </div>
      <article className="coffe-text">❤️ Regalame un café. ☕</article>
    </div>
  );
};

export default BuyMeCoffe;
