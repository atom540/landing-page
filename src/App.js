import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Introduction from './components/Introduction/Introduction';
import Box from './components/Box/Box';
import Need_help from './components/Need_help/Need_help';
import Treating from './components/Treating/Treating';
import Recovery from './components/Recovery/Recovery';
import Box2 from './components/Box2/Box2';
import Footer from './components/Footer/Footer';
import ImageBox from './components/ImageBox/ImageBox';
import Transistion from './components/Transition/Transistion';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Box/>
      <Need_help/>
      <Treating/>
      <Recovery/>
      <Box2/>
      <ImageBox/>
      <Transistion/>
    
      <Footer/>
    </div>
  );
}

export default App;
