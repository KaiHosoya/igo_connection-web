// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
// import Index from "./views/Index";
import Application from "./views/Application";
import Setting from "./views/Setting";
// import PlayerDetail from "./views/PlayerDetail";
import ApplicationForm from "./views/ApplicationForm";
// import Playback from "./views/Playback";
import Login from "./views/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/home`} element={<Home />} />
        {/* <Route path={`/index`} element={<Index />} />
        <Route path={`/index/playback`} element={<Playback />} /> */}
        <Route path={`/application`} element={<Application />} />
        {/* <Route path={`/application/detail`} element={<PlayerDetail />} /> */}
        <Route path={`application/form`} element={<ApplicationForm />} />
        <Route path={`/setting`} element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
