import './SarethProfil.css'
import bilde from './sareth.svg'

function SarethProfil() {
  return (
    <article className="sareth-terminal">
      <header className="sareth-topbar">
        <span className="sareth-prikk sareth-prikk--rod"></span>
        <span className="sareth-prikk sareth-prikk--gul"></span>
        <span className="sareth-prikk sareth-prikk--gronn"></span>
        <p>~/sareth --profile</p>
      </header>
      <figure className="sareth-bilde">
        <img src={bilde} alt="Portrett av Sareth" />
      </figure>
      <section className="sareth-data">
        <p><span className="sareth-key">name:</span> Sareth</p>
        <p><span className="sareth-key">study:</span> Bachelor i informatikk</p>
        <address>
          <p>
            <span className="sareth-key">email:</span>{' '}
            <a href="mailto:sareth@hiof.no">sareth@hiof.no</a>
          </p>
        </address>
      </section>
    </article>
  )
}

export default SarethProfil