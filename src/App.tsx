import './App.css'
import Tablazat from './components/Tablazat'
import Urlap from './components/Urlap'

function App() {


  

  return (
    <>
      <header><h1>Könyvesbolt készlete</h1></header>
      <main>
        <h2>Új könyv hozzáadása</h2>
        <Urlap/>
        <h2>Könyvek raktáron:</h2>
        <Tablazat/>
      </main>
      <footer>Erdős Viktória | Könyvesbolt</footer>
    </>
  )
}

export default App
