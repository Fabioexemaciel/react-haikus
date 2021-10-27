import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Home from "./Home/Home";

const App = () => (
  <>
    <Header />
    <Main>
	     Cualquier contenido puede estar en main
    </Main>
    <Footer />
  </>
);

export default App;
