import './Navbar.css';
import { Link } from "react-router-dom"; 
import moon from "../../graphics/assets/landing-page/moon.svg";


function Navbar() {
    return ( 
        <nav className="navbar">
        <ul className="nav-dropdwon">
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Tracks</Link>
            </li>
            <li>
                <Link>Speakers</Link>
            </li>
            <li>
                <Link>Schedule</Link>
            </li>
            <li>
                <Link>FAQ</Link>
            </li>
            <li>
                <Link>Sponsors</Link>
            </li> 
        </ul>
    </nav>
     );
}
 
export default Navbar;