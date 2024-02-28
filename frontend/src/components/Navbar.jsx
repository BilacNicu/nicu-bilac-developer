import "../styles/Navbar.css";
import {React} from 'react';
import { RevealNavbar, RevealNavbar2, RevealNavbar3, RevealNavbar4, RevealNavbar5 } from '../components/RevealNavbar'

function Navbar() {

return (
    <nav className='navbar'>
        <RevealNavbar><span className="sidebarLogo">
            NB
            <span>.</span>
        </span></RevealNavbar>
        <RevealNavbar2> <a href="#about" className="link">Despre</a></RevealNavbar2>
        <RevealNavbar3><a href="#projects" className="link">Proiecte</a></RevealNavbar3>
        <RevealNavbar4><a href="#experience" className="link">Exp.</a></RevealNavbar4>
        <RevealNavbar5><a href="#contact" className="link">Contact</a></RevealNavbar5>
    </nav>
);
};
export default Navbar;