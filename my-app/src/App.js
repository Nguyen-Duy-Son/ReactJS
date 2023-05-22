import logo from "./logo.svg";
import "./App.css";
// import Parent from "./Child/Parent";
// import store from "./Content/store";
// import { loadState } from "./utils/localStorage";
// import staticData from "./Child/mock.json";
// import Header from "./Components/Header/Header"
import { Routes, Route } from "react-router-dom";
import HomeNotSignIn from "./Components/Figma/HomeNotSignIn";
import HomeSignIn from "./Components/Figma/HomeSignIn";
import SignIn from "./Components/Figma/SignIn";
import Home from "./Components/Figma/Home";
import Header from "./Components/Header/Header";
import Profile from "./Components/Figma/Profile";
function App() {
  // const { UserContext } = store;
  // const states = loadState("data")?.data;
  // const defaultUserState = states && states.length > 0 ? states : staticData;
  // return (
  //   <UserContext.Provider value={defaultUserState}>
  //     {/* <UserContext.Provider value={staticData}> */}
  //     <div className="text-center bg-slate-300">
  //       <main className="min-h-screen flex flex-col items-center justify-center text-template">
  //         <Parent />
  //       </main>
  //     </div>
  //   </UserContext.Provider>
  // );

  return (
    <Routes>
      <Route path="/" element={<Header></Header>}></Route>
      <Route
        path="/Home-NotSignIn"
        element={<HomeNotSignIn></HomeNotSignIn>}
      ></Route>
      <Route
        path="/Home-NotSignIn"
        element={<Profile></Profile>}
      ></Route>
      <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
      <Route path="/Home-SignIn" element={<HomeSignIn></HomeSignIn>}></Route>
    </Routes>
  );
}

export default App;
