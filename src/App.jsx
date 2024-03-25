import { Header } from "./components/Header";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 transition-all duration-300">
        <Header />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
