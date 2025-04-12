import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from "./components/Menu";
import Overview from "./components/Overview";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

interface RouteData {
  title: string,
  url: string,
  component: JSX.Element,
}

const routes: RouteData[] = [
  { title: "Overview", url: "/", component: <Overview /> },
  { title: "Work Experience", url: "/work-experience", component: <WorkExperience />},
  { title: "Skills", url: "/skills", component: <Skills />},
  { title: "Portfolio", url: "/portfolio", component: <Portfolio />},
];

function App() {
  return (
    <div className="App">
      <Menu buttons={ routes.map( (route) => [route.title, route.url] ) } />
      <Routes>
        { routes.map( (route) => <Route key={route.url} path={route.url} element={route.component}/> ) }
      </Routes>
      <footer style={{position:"fixed", bottom:0}}>Michael Cunningham - November 2022</footer>
    </div>
  );
}

export default App;
