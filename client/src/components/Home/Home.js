import './Home.scss'
import Logo from '../../assets/logo/logo.png';
import Dress1 from '../../assets/images/dress1.png';
import Dress2 from '../../assets/images/dress2.png';
import Dress3 from '../../assets/images/dress3.png';
import Dress4 from '../../assets/images/dress4.png';
import { NavLink } from 'react-router-dom';
import * as React from "react";


function Home() {

        return (
            <>
            <div>
                <img
                    src={Logo}
                    width="350"
                    className="centered-logo"
                    alt="Say Yes To A Dress Logo"
                />
                <ul className="home-grid">
                    <li className="tl"><NavLink to="/dress"><img src={Dress1} alt="wedding Aline dress" /><div><h3>Buy Dress</h3></div></NavLink></li>
                    <li className="tr"><NavLink to="/add"><img src={Dress2} alt="wedding gown" /><div><h3>Sell Dress</h3></div></NavLink></li>
                    <li className="bl"><NavLink to="/rent"><img src={Dress3} alt="wedding dress" /><div><h3>Rent Dress</h3></div></NavLink></li>
                    <li className="br"><NavLink to="/signup"><img src={Dress4} alt="wedding dress" /><div><h3>Signup/Signin</h3></div></NavLink></li>
                </ul>
            </div>
            </>
        );
    }

export default Home;