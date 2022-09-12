// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Index from "./views/Index";
import Application from "./views/Application";
// import Setting from "./views/Setting";
import PlayerDetail from "./views/PlayerDetail";
import ApplicationForm from "./views/ApplicationForm";
import Playback from "./views/Playback";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

import { getCurrentUser } from "./lib/api/auth";
import { createContext, useState, useEffect } from "react";

export const authContent = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState()


  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser
      if (res?.data) {
        setCurrentUser(res?.data.data)
      } else {
        console.log("No Current User")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <BrowserRouter>
      <authContent.Provider value={{ currentUser, setCurrentUser}}>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/signup`} element={<SignUp />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/index`} element={<Index />} />
        <Route path={`/index/playback`} element={<Playback />} />
        <Route path={`/application`} element={<Application />} />
        <Route path={`/application/detail`} element={<PlayerDetail />} />
        <Route path={`application/form`} element={<ApplicationForm />} />
        {/* <Route path={`/setting`} element={<Setting />} /> */}
        <Route path="*" element={<Navigate to={`/home`} />} />
      </Routes>
      </authContent.Provider>
    </BrowserRouter>
  );
}

export default App;
