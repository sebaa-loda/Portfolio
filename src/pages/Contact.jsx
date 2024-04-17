import "../scss/pages/contact/_contact.scss";

export const Contact = () => {
  return (
    <div id="contacto" className="contacto">
      <h2>Contactame!</h2>
      <div className="contacto__container">
        <p>
          Email:
          <a href="mailto:sebasmdq96@hotmail.com"> sebasmdq96@hotmail.com</a>
        </p>

        <p>
          Whatsapp:{" "}
          <a href="https://wa.me/+5492235135848?text=mensaje">+5492235135848</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/sebastian-loda">
            www.linkedin.com/in/sebastian-loda
          </a>
        </p>
      </div>
    </div>
  );
};
