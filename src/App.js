import "./App.css";
import Layout from "./components/Layout/Layout";
import Error404 from "./pages/404/404";
import Overview from "./pages/Overview/Overview";

import { Navigate, Route, Routes } from "react-router-dom";
import Music from "./pages/Music/Music";
import Contact from "./pages/Contact/Contact";
import CV from "./pages/Resume/CV";
import { app } from "./firebaseconfig"; // Adjust the path as needed
import FishPage from "./pages/Fish/Fish";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Overview />} />
        {/* 
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cv" element={<CV />} /> */}
        <Route exact path="/404" element={<Error404 />} />
        <Route exact path="/fish" element={<FishPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Layout>
  );
}

export default App;
