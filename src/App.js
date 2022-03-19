import './App.css';

import Navbar from './sections/Navbar/Navbar.js';
import Landing from './sections/Landing/Landing.js';
import About from './sections/About/About.js';
import Tracks from './sections/Tracks/Tracks.js';
import Schedule from './sections/Schedule/Schedule.js';
import FAQ from "./sections/FAQ/FAQ";
import Speakers from "./sections/Speakers/Speakers";
import Purpose from "./sections/Purpose/Purpose";
import Sponsors from "./sections/Sponsors/Sponsors";
import Transition from "./sections/Transition/Transition.js"


function App() {

    return (
        <div>
            {window.innerWidth >= 768 && <Navbar/>}
            <Landing/>
            <About/>
            <Transition color1={"#FFFFFF"} color2={"#AAAAAA"}/>
            <Tracks/>
            {/*<Purpose/>*/}
            {/*<Schedule/>*/}
            <Speakers/>
            <Schedule/>
            {/*<Speakers/>*/}
            {/*<Sponsors/>*/}
            <FAQ/>
        </div>
    );
}

export default App;
