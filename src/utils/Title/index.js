import React from 'react'
import styles from './Title.module.css'

const Title = (props) => {
    return (
        <h1 className={styles.page__title}>{props.content}</h1>
    )
}

export default Title