import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AlertContext } from '../../Contexts/AlertContext';
import Breadcrumbs from '../Breadcrumbs';
import CustomAlert from '../CustomAlert';

import styles from './Hero.module.css';

const Hero = (props) => {
    const { isActive, variant, message } = useContext(AlertContext);
    return (
        <div className={styles.hero__image}>
            <Container>
                <Row>
                    <Col>
                        <Breadcrumbs content={props.content} pathname={props.pathname} />
                        <br />
                        {isActive && <CustomAlert variant={variant} message={message} />}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero