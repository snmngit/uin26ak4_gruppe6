import './Header.css'

function Header({ gruppenummer }) {
  return (
    <header className="site-header">
      <h1>Gruppe {gruppenummer}</h1>
      <p>Utvikling av interaktive nettsteder — UIN</p>
    </header>
  )
}

export default Header