import './Header.scss';
import Logo from '../../assets/logo/logo.png'
import arrowBack from "../../assets/icons/back-arrow.png";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <>
    <div className='header'>           
        <img
            src={Logo}
            width="230"
            className="top-centered-logo"
            alt="Say Yes To A Dress Logo"
        />
        <div className="back-arrow-box">
            <NavLink to="/">
                <img 
                width="30"
                src={arrowBack}
                alt="back-arrow"
            />
            </NavLink>
        </div>
        </div>
    </>
    );
};

export default Header;