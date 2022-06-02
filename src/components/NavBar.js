import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'



function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
    }
    return (
        <div>
            <footer className='navbar'>
                <nav className="navbarNav">
                    <ul className="navbarListItems ">
                        <li className="navbarListItem" onClick={() => navigate('/')}>
                            <ExploreIcon fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                            <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navBarListItemName'}>Explore </p>
                        </li>
                        <li className="navbarListItem" onClick={() => navigate('/offer')}>
                            <OfferIcon fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                            <p className={pathMatchRoute('/offer') ? 'navbarListItemNameActive' : 'navBarListItemName'}>Offer </p>
                        </li>
                        <li className="navbarListItem" onClick={() => navigate('/profile')}>
                            <PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px' />
                            <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navBarListItemName'}>Profile </p>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}

export default NavBar