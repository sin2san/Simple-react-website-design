import React from 'react';
import logoImg from './logo.png';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <img className={styles.logo} src={logoImg} alt="Logo" />
    )
}

export default Logo;