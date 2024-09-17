import { Hero, Footer, Calender, SurveyComponent } from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    {/* <section className="xl:padding-l wide:padding-r padding-b">
      <SurveyComponent />
    </section> */}
    <section>
      <Calender />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App
