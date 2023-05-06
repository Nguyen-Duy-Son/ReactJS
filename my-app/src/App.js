import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeNotSignIn from "./Components/Figma/HomeNotSignIn";
import HomeSignIn from "./Components/Figma/HomeSignIn";
import SignIn from "./Components/Figma/SignIn";
import Home from './Components/Figma/Home'
function App() {
  return (
    <div className="App flex">
      <Routes>
        {/* <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/content" element={<div>Content</div>}></Route>
        <Route path="/about" element={<div>About</div>}></Route>
        <Route path="/form" element={<SignupForm></SignupForm>}></Route> */}
        {/* path * la truong hop ko dung no tra ra*/}
        {/* <Route path="*" element={<div>not found</div>}></Route> */}
        <Route
          path="/"
          element={<Home></Home>}
        ></Route>
        <Route
          path="/Home-NotSignIn"
          element={<HomeNotSignIn></HomeNotSignIn>}
        ></Route>
        <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
        <Route path="/Home-SignIn" element={<HomeSignIn></HomeSignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
