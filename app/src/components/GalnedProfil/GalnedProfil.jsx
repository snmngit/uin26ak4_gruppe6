import './GalnedProfil.css'
import bilde from './galned.svg'

function GalnedProfil() {
  return (
    <article className="galned-kort">
      <figure className="galned-bilde-ramme">
        <img src={bilde} alt="Portrett av Galned" />
      </figure>
      <header className="galned-info">
        <h3>Galned</h3>
        <p className="galned-studie">Bachelor i digitale medier og design</p>
      </header>
      <address className="galned-kontakt">
        <a href="mailto:galned@hiof.no">galned@hiof.no</a>
      </address>
    </article>
  )
}

export default GalnedProfil