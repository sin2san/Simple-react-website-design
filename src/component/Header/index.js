import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

import Logo from './Logo';
import styles from './Header.module.css';
import { AuthContext } from '../../Contexts/AuthContext';
import { AlertContext } from '../../Contexts/AlertContext';

const Header = () => {
    const { setEmail } = useContext(AuthContext);
    const { setIsActive } = useContext(AlertContext);
    const emailAddress = localStorage.getItem('email');

    const LogoutHandler = () => {
        setEmail('');
        setIsActive(false);
        localStorage.removeItem('email');
    }
    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col className='my-auto ms-auto' xs={1}>
                        <Logo />
                    </Col>
                    <Col className={`${styles.header__col__links} my-auto`} xs={11}>
                        <nav className={styles.nav}>
                            <NavLink className={styles.nav__link} to='/'>Home</NavLink>
                            <NavLink className={styles.nav__link} to='/contact'>Contact</NavLink>
                            {!emailAddress && <NavLink className={styles.nav__link} to='/login'>Login</NavLink>}
                            {emailAddress && <NavLink className={styles.nav__link} to='/' onClick={LogoutHandler}>Logout</NavLink>}
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Header