import "../scss/pages/contact/_contact.scss";

export const Contact = () => {
  return (
    <div
      id="contacto"
      className="contacto animate__animated animate__fadeInLeft"
    >
      <h2>Contactame!</h2>
      <div className="contacto__container">
       {/* <div className="contacto__form"> */}
        {/* <form action="" className="form">
        <div class="campo">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Tu Nombre" required/>
          </div>
          <div class="campo">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Tu Email" required/>
          </div>
          <div class="campo">
            <label for="mensaje">Mensaje</label>
            <input type="text" id="mensaje" placeholder="Tu Mensaje" required/>
          </div>
          <div class="campo">
            <input type="submit" value="enviar"/>
          </div>
        </form> */}
        {/* </div> */}
        <div className="contacto__enlaces">
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
    </div>
  );
};
