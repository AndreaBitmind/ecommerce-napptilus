import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Homepage } from "./pages/HomePage";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
