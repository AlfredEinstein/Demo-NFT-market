import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Bestsellers from "./pages/BestSellers/Bestsellers";
import Products from "./pages/Products/Products";


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Bestsellers/>
      <Products/>
    </>
  );
}

export default App;
