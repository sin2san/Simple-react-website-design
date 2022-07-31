import React from 'react';

import styles from './layout.module.css';

const Layout = (props) => {
    return (
        <div className={styles.content}>{props.children}</div>
    )
}

export default Layout