import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Home from "./Home/Home";

const App = () => (
  <>
    <Header />
    <Main>
	     <Home />
    </Main>
    <Footer />
  </>
);

export default App;
