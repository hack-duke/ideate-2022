import './App.css';

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './sections/Navbar/Navbar.js';
import Landing from './sections/Landing/Landing.js';
import About from './sections/About/About.js';
import Schedule from './sections/Schedule/Schedule.js';
import FAQ from "./sections/FAQ/FAQ";
import Speakers from "./sections/Speakers/Speakers";
import Purpose from "./sections/Purpose/Purpose";
import Sponsors from "./sections/Sponsors/Sponsors";

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes" 
import  {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/Toggler"


function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

    return (

      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles/>
              <Router>
                  <div className="navbar-container">
                    <Navbar/>
                    <Toggle theme={theme} toggleTheme={themeToggler} />
                  </div>
                    <Switch>
                      <Route exact path="/">
                      <Landing/>
                      </Route>
                    </Switch>
              </Router>
        </>
      </ThemeProvider>
    );
}

export default App;
