import logo from './logo.svg';
import './App.css';
import Header from './components/Buoi1/Header';
import Banner from './components/Buoi1/Banner';
import Footer from './components/Buoi1/footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
// async function test(){
//   return Promise.resolve(1);
// }