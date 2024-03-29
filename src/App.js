import './App.css';

import Navbar from './sections/Navbar/Navbar.js';
import Landing from './sections/Landing/Landing.js';
import About from './sections/About/About.js';
import Tracks from './sections/Tracks/Tracks.js';
import Schedule from './sections/Schedule/Schedule.js';
import FAQ from "./sections/FAQ/FAQ";
import Speakers from "./sections/Speakers/Speakers";
import Footer from "./sections/Footer/Footer.js"
import Purpose from "./sections/Purpose/Purpose";
import Sponsors from "./sections/Sponsors/Sponsors";


function App() {

    return (
        <div>
            <Navbar/>
            <Landing/>
            <About/>
            <Tracks/>
            <Speakers/>
            <Schedule/>
            <Sponsors/>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default App;
