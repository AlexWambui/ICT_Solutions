import {Link} from 'react-router-dom'

import './navbar.css'

function Navbar(){
    return(
        <nav>
            <Link to='/' className='logo'>
                <h1>ICT Infrastructure Solutions</h1>
            </Link>           
            <ul>
                <li>
                    <Link to='/' className='nav_link'>Home</Link>
                </li>
                <li>
                    <Link to='/about' className='nav_link logo'>About</Link>
                </li>
                <li>
                    <Link to='/services' className='nav_link'>Services</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;