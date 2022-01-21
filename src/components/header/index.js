import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import styles from './index.module.css';
import NavLink from '../../components/link/navlink';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import UserContext from '../../Context';
import getNavigation from '../../utils/navigation';

const Header = () => {

    const userData = useContext(UserContext);
    const { isLoggedIn, isAdmin, appUser } = userData;
    const links = getNavigation(isLoggedIn, isAdmin, appUser);

    return (
        <nav className={styles.container}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>


            <div className={styles.search}>
                <input type="text" className={styles['search-input']} />
                <SearchIcon className={styles['search-icon']} />
            </div>

            <div className={styles['nav-menu']}>

                {
                    links.map(nav => {
                        return (
                            <NavLink key={nav.title} to={nav.link} title={nav.title} />
                        )
                    })
                }
            </div>
        </nav>
    )
}


export default Header;