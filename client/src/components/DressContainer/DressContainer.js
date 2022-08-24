import './DressContainer.scss';
import Logo from '../../assets/logo/logo.png'
import arrowBack from "../../assets/icons/back-arrow.png";
import { NavLink } from 'react-router-dom';

const DressContainer = () => {

    return (
        <>
    <div className='dress-container'>           
    <div className="dress-container__background">

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
        <div className='overlay'>
        </div>
    </div> 
    </div>
    </>
    );
};

export default DressContainer;