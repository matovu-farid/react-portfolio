import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import { fetchProjects } from './app/projects';
import Homepage from './pages/Homepage';
import ProjectPage from './pages/ProjectPage';
import 'aos/dist/aos.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
    AOS.init();
  }, []);
  return (

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contacts" element={<ProjectPage />} />
      <Route path="/about" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
