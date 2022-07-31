import React from 'react'
import { Card } from 'react-bootstrap';

import CustomButton from '../CustomButton';

import styles from './cardWrapper.module.css';

const CardWrapper = (props) => {
    return (
        <Card className={styles.card}>
            <Card.Img className={styles.card__image} variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <CustomButton name={props.buttonText} />
            </Card.Body>
        </Card>
    )
}

export default CardWrapper