import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Home from "./Home/Home";
import Contactanos from "./contactanos/contactanos";

const App = () => (
  <>
    <Header />
    <Main>
	     <Home />
       {/* <Contactanos /> */}
    </Main>
    <Footer />
  </>
);

export default App;
