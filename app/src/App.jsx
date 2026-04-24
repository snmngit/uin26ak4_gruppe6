import Header from './components/Header'
import GalnedProfil from './components/GalnedProfil/GalnedProfil'
import SarethProfil from './components/SarethProfil/SarethProfil'
import ArbeidskravListe from './components/ArbeidskravListe/ArbeidskravListe'
import './App.css'

function App() {
  return (
    <>
      <Header gruppenummer={6} />
      <main>
        <section className="profiler" aria-label="Gruppemedlemmer">
          <h2>Møt gruppen</h2>
          <ul className="profil-grid">
            <li><GalnedProfil /></li>
            <li><SarethProfil /></li>
          </ul>
        </section>

        <section className="arbeidskrav" aria-label="Arbeidskrav">
          <h2>Arbeidskrav fra UIN</h2>
          <ArbeidskravListe />
        </section>
      </main>
    </>
  )
}

export default App