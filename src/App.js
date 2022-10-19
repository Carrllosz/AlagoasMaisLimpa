import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Produtos from "./components/Produtos";
import About from "./components/About";
import Produtosdois from "./components/Produtosdois";
import Footer from "./components/Footer";

function App() {

  return (
  <div>
      <Navbar />
      <Home/>
      <Produtos/>
      <About/>
      <Produtosdois/>
      <Footer/>
  </div>
  );
}

export default App;

