import "./App.css";
import Layout from "./components/Layout/Layout";
import Error404 from "./pages/404/404";
import Overview from "./pages/Overview/Overview";

import { Navigate, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Music from "./pages/Music/Music";
import Contact from "./pages/Contact/Contact";
import CV from "./pages/Resume/CV";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Overview />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/music" element={<Music />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cv" element={<CV />} />
        <Route exact path="/404" element={<Error404 />} />

        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Layout>
  );
}

export default App;
