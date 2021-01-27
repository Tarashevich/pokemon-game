import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import layoutBgOne from "./assets/background1.jpg"
import layoutBgTwo from "./assets/background2.jpg"

function App() {

  return (
    <div className="App">
      <Header title={'Pokemon'} desc={'Game'}/>
      <Layout title={'Interesting'} desc={'Game'} id={1} urlBg={layoutBgOne}/>
      <Layout title={'Exciting'} desc={'Game'} id={2} colorBg={'linear-gradient(180deg, rgba(7,5,19,1) 0%, rgba(252,167,37,1) 100%)'}/>
      <Layout title={'Good'} desc={'Game'} id={3} urlBg={layoutBgTwo}/>
      <Footer />
    </div>
  );
}

export default App;
