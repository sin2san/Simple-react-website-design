import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './customButton.module.css';

const CustomButton = (props) => {
    return (
        <Button className={styles.button} variant="primary" type="submit">
            {props.name}
        </Button>
    )
}

export default CustomButton