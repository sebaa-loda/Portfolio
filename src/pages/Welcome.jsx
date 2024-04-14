import { About } from "./About";

export const Welcome = () => {
  return (
    <div id="inicio">
      <h1>Sebastián Patricio Loda</h1>
      <h4>Si quieres ponerte en contacto conmigo escribime a:  
      <a href="mailto:sebasmdq96@hotmail.com"> sebasmdq96@hotmail.com</a>
      </h4>

      <div>
        <About />
      </div>
    </div>
  )
}
