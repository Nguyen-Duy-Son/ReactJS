import logo from "./logo.svg";
import "./App.css";
// import Parent from "./Child/Parent";
// import store from "./Content/store";
// import { loadState } from "./utils/localStorage";
// import staticData from "./Child/mock.json";
// import Header from "./Components/Header/Header"
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Figma/HomeNotSignIn";
import HomeSignIn from "./Components/Figma/HomeSignIn";
import SignIn from "./Components/Figma/SignIn";
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
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<SignIn />} />
      <Route path="/Home-SignIn" element={<HomeSignIn />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Home" element={<Home/>}/>
    </Routes>
  );
}

export default App;
