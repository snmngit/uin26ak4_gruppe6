import { useEffect, useState } from 'react'
import { sanityClient } from '../../lib/sanityClient'
import './ArbeidskravListe.css'

function ArbeidskravListe() {
  const [krav, setKrav] = useState([])
  const [laster, setLaster] = useState(true)
  const [feil, setFeil] = useState(null)

  useEffect(() => {
    const query = `*[_type == "arbeidskrav"] | order(nummer asc) {
      _id,
      nummer,
      tittel,
      beskrivelse
    }`

    sanityClient
      .fetch(query)
      .then((data) => {
        setKrav(data)
        setLaster(false)
      })
      .catch((err) => {
        setFeil(err.message)
        setLaster(false)
      })
  }, [])

  if (laster) return <p>Laster arbeidskrav…</p>
  if (feil) return <p role="alert">Kunne ikke hente data: {feil}</p>

  return (
    <ol className="krav-liste">
      {krav.map((k) => (
        <li key={k._id}>
          <article className="krav-kort">
            <header>
              <h3>
                <span className="krav-nummer">#{k.nummer}</span> {k.tittel}
              </h3>
            </header>
            <p>{k.beskrivelse}</p>
          </article>
        </li>
      ))}
    </ol>
  )
}

export default ArbeidskravListe