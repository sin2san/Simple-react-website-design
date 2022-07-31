import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './breadcrumbs.module.css'

const Breadcrumbs = (props) => {
    return (
        <>
            <h1 className={styles.heading}>{props.content}</h1>
            {props.pathname &&
                <ul className={styles.breadcrumbs__list}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <a>{props.pathname}</a>
                    </li>
                </ul>
            }
        </>
    )
}

export default Breadcrumbs