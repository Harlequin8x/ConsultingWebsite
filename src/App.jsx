import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Hero, Footer, Calender } from './sections'
import Nav from './components/Nav'
import HeroImpressum from './sections/HeroImpressum'
import HeroDataPrivacy from './sections/HeroDataPrivacy'

const App = () => (
  <Router>
    <main className="relative">
      <Nav />
      <Routes>
        {/* Hauptseite */}
        <Route
          path="/"
          element={
            <>
              <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
              </section>
              <section>
                <Calender />
              </section>
              <section className="bg-beige padding-x padding-t pb-8">
                <Footer />
              </section>
            </>
          }
        />
        {/* Impressum-Seite */}
        <Route
          path="/impressum"
          element={
            <>
              <section>
                <HeroImpressum />
              </section>
            </>
          }
        />
        {/* Datenschutzerklärung-Seite */}
        <Route
          path="/dataprivacy"
          element={
            <>
              <section>
                <HeroDataPrivacy />
              </section>
            </>
          }
        />
      </Routes>
    </main>
  </Router>
)

export default App
