import logo from './logo.svg';
import './App.css';
// import Test from '../src/Use/Test'
// import Test1 from '../src/Use/Test1'
// import TestUseRef from './Components/UseRef/TestUseRef';
// import Todoapp from './Todoapp/Todoapp';
import Form from './Components/form/Form'
import Basic from './Components/form/Basic'
import SignupForm from './Components/form/SignupForm';
import { Routes,Route } from 'react-router-dom';
import Content from './Components/test/Content'
import Nav from './Components/test/Nav';
import Header from './Components/test/Header';
import About from './Components/test/About';
function App() {
  return (
    <div className="App flex">
      {/* <Test></Test> */}
      {/* <Todoapp></Todoapp> */}
      {/* <Form></Form> */}
      {/* <Basic></Basic> */}
      {/* <SignupForm></SignupForm> */}

      <Header></Header>
      <Nav></Nav>
      {/* <About></About> */}
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/content" element={<div>Content</div>}></Route>
        <Route path="/about" element={<div>About</div>}></Route>
        <Route path="/form" element={<SignupForm></SignupForm>}></Route>
        {/* path * la truong hop ko dung no tra ra*/}
        {/* <Route path="*" element={<div>not found</div>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
